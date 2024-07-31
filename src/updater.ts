/*
Copyright 2016-2021 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { app, autoUpdater, ipcMain } from "electron";
import fs from "node:fs/promises";

import { getSquirrelExecutable } from "./squirrelhooks";

const UPDATE_POLL_INTERVAL_MS = 60 * 60 * 1000;
const INITIAL_UPDATE_DELAY_MS = 30 * 1000;

function installUpdate(): void {
    // for some reason, quitAndInstall does not fire the
    // before-quit event, so we need to set the flag here.
    global.appQuitting = true;
    autoUpdater.quitAndInstall();
}

// Workaround for Squirrel.Mac wedging auto-restart if latest check for update failed
// From https://github.com/vector-im/element-web/issues/12433#issuecomment-1508995119
async function safeCheckForUpdate(): Promise<void> {
    if (process.platform === "darwin") {
        const feedUrl = autoUpdater.getFeedURL();
        // On Mac if the user has already downloaded an update but not installed it and
        // we check again and no additional new update is available the app ends up in a
        // bad state and doesn't restart after installing any updates that are downloaded.
        // To avoid this we check manually whether an update is available and call the
        // autoUpdater.checkForUpdates() when something new is there.
        try {
            const res = await global.fetch(feedUrl);
            const { currentRelease } = await res.json();
            const latestVersionDownloaded = latestUpdateDownloaded?.releaseName;
            console.info(
                `Latest version from release download: ${currentRelease} (current: ${app.getVersion()}, most recent downloaded ${latestVersionDownloaded}})`,
            );
            if (currentRelease === app.getVersion() || currentRelease === latestVersionDownloaded) {
                ipcChannelSendUpdateStatus(false);
                return;
            }
        } catch (err) {
            console.error(`Error checking for updates ${feedUrl}`, err);
            ipcChannelSendUpdateStatus(false);
            return;
        }
    }
    autoUpdater.checkForUpdates();
}

async function pollForUpdates(): Promise<void> {
    try {
        // If we've already got a new update downloaded, then stop trying to check for new ones, as according to the doc
        // at https://github.com/electron/electron/blob/main/docs/api/auto-updater.md#autoupdatercheckforupdates
        // we'll just keep re-downloading the same update.
        // As a hunch, this might also be causing https://github.com/vector-im/element-web/issues/12433
        // due to the update checks colliding with the pending install somehow
        if (!latestUpdateDownloaded) {
            await safeCheckForUpdate();
        } else {
            console.log("Skipping update check as download already present");
            global.mainWindow?.webContents.send("update-downloaded", latestUpdateDownloaded);
        }
    } catch (e) {
        console.log("Couldn't check for update", e);
    }
}

export async function start(updateBaseUrl: string): Promise<void> {
    if (!(await available(updateBaseUrl))) return;
    if (!updateBaseUrl.endsWith("/")) {
        updateBaseUrl = updateBaseUrl + "/";
    }

    try {
        let url: string;
        let serverType: "json" | undefined;

        if (process.platform === "darwin") {
            // On macOS it takes a JSON file with a map between versions and their URLs
            url = `${updateBaseUrl}macos/releases.json`;
            serverType = "json";
        } else if (process.platform === "win32") {
            // On windows it takes a base path and looks for files under that path.
            url = `${updateBaseUrl}win32/${process.arch}/`;
        } else {
            // Squirrel / electron only supports auto-update on these two platforms.
            // I'm not even going to try to guess which feed style they'd use if they
            // implemented it on Linux, or if it would be different again.
            return;
        }

        if (url) {
            console.log(`Update URL: ${url}`);
            autoUpdater.setFeedURL({ url, serverType });
            // We check for updates ourselves rather than using 'updater' because we need to
            // do it in the main process (and we don't really need to check every 10 minutes:
            // every hour should be just fine for a desktop app)
            // However, we still let the main window listen for the update events.
            // We also wait a short time before checking for updates the first time because
            // of squirrel on windows and it taking a small amount of time to release a
            // lock file.
            setTimeout(pollForUpdates, INITIAL_UPDATE_DELAY_MS);
            setInterval(pollForUpdates, UPDATE_POLL_INTERVAL_MS);
        }
    } catch (err) {
        // will fail if running in debug mode
        console.log("Couldn't enable update checking", err);
    }
}

async function available(updateBaseUrl?: string): Promise<boolean> {
    if (process.platform === "linux") {
        // Auto update is not supported on Linux
        console.log("Auto update not supported on this platform");
        return false;
    }

    if (process.platform === "win32") {
        try {
            await fs.access(getSquirrelExecutable());
        } catch {
            console.log("Squirrel not found, auto update not supported");
            return false;
        }
    }

    // Otherwise we're either on macOS or Windows with Squirrel
    return !!updateBaseUrl;
}

ipcMain.on("install_update", installUpdate);
ipcMain.on("check_updates", pollForUpdates);

function ipcChannelSendUpdateStatus(status: boolean | string): void {
    global.mainWindow?.webContents.send("check_updates", status);
}

interface ICachedUpdate {
    releaseNotes: string;
    releaseName: string;
    releaseDate: Date;
    updateURL: string;
}

// cache the latest update which has been downloaded as electron offers no api to read it
let latestUpdateDownloaded: ICachedUpdate | undefined;
autoUpdater
    .on("update-available", function () {
        ipcChannelSendUpdateStatus(true);
    })
    .on("update-not-available", function () {
        if (latestUpdateDownloaded) {
            // the only time we will get `update-not-available` if `latestUpdateDownloaded` is already set
            // is if the user used the Manual Update check and there is no update newer than the one we
            // have downloaded, so show it to them as the latest again.
            global.mainWindow?.webContents.send("update-downloaded", latestUpdateDownloaded);
        } else {
            ipcChannelSendUpdateStatus(false);
        }
    })
    .on("error", function (error) {
        ipcChannelSendUpdateStatus(error.message);
    });

autoUpdater.on("update-downloaded", (ev, releaseNotes, releaseName, releaseDate, updateURL) => {
    // forward to renderer
    latestUpdateDownloaded = { releaseNotes, releaseName, releaseDate, updateURL };
    global.mainWindow?.webContents.send("update-downloaded", latestUpdateDownloaded);
});
