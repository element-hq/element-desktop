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

const UPDATE_POLL_INTERVAL_MS = 60 * 60 * 1000;
const INITIAL_UPDATE_DELAY_MS = 30 * 1000;

function installUpdate(): void {
    // for some reason, quitAndInstall does not fire the
    // before-quit event, so we need to set the flag here.
    global.appQuitting = true;
    autoUpdater.quitAndInstall();
}

function pollForUpdates(): void {
    try {
        autoUpdater.checkForUpdates();
    } catch (e) {
        console.log('Couldn\'t check for update', e);
    }
}

export function start(updateBaseUrl: string): void {
    if (updateBaseUrl.slice(-1) !== '/') {
        updateBaseUrl = updateBaseUrl + '/';
    }
    try {
        let url;
        // For reasons best known to Squirrel, the way it checks for updates
        // is completely different between macOS and windows. On macOS, it
        // hits a URL that either gives it a 200 with some json or
        // 204 No Content. On windows it takes a base path and looks for
        // files under that path.
        if (process.platform === 'darwin') {
            // include the current version in the URL we hit. Electron doesn't add
            // it anywhere (apart from the User-Agent) so it's up to us. We could
            // (and previously did) just use the User-Agent, but this doesn't
            // rely on NSURLConnection setting the User-Agent to what we expect,
            // and also acts as a convenient cache-buster to ensure that when the
            // app updates it always gets a fresh value to avoid update-looping.
            url = `${updateBaseUrl}macos/?localVersion=${encodeURIComponent(app.getVersion())}`;
        } else if (process.platform === 'win32') {
            url = `${updateBaseUrl}win32/${process.arch}/`;
        } else {
            // Squirrel / electron only supports auto-update on these two platforms.
            // I'm not even going to try to guess which feed style they'd use if they
            // implemented it on Linux, or if it would be different again.
            console.log('Auto update not supported on this platform');
        }

        if (url) {
            console.log(`Update URL: ${url}`);
            autoUpdater.setFeedURL(url);
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
        console.log('Couldn\'t enable update checking', err);
    }
}

ipcMain.on('install_update', installUpdate);
ipcMain.on('check_updates', pollForUpdates);

function ipcChannelSendUpdateStatus(status: boolean | string): void {
    if (!global.mainWindow) return;
    global.mainWindow.webContents.send('check_updates', status);
}

interface ICachedUpdate {
    releaseNotes: string;
    releaseName: string;
    releaseDate: Date;
    updateURL: string;
}

// cache the latest update which has been downloaded as electron offers no api to read it
let latestUpdateDownloaded: ICachedUpdate;
autoUpdater.on('update-available', function() {
    ipcChannelSendUpdateStatus(true);
}).on('update-not-available', function() {
    if (latestUpdateDownloaded) {
        // the only time we will get `update-not-available` if `latestUpdateDownloaded` is already set
        // is if the user used the Manual Update check and there is no update newer than the one we
        // have downloaded, so show it to them as the latest again.
        if (!global.mainWindow) return;
        global.mainWindow.webContents.send('update-downloaded', latestUpdateDownloaded);
    } else {
        ipcChannelSendUpdateStatus(false);
    }
}).on('error', function(error) {
    ipcChannelSendUpdateStatus(error.message);
});

autoUpdater.on('update-downloaded', (ev, releaseNotes, releaseName, releaseDate, updateURL) => {
    if (!global.mainWindow) return;
    // forward to renderer
    latestUpdateDownloaded = { releaseNotes, releaseName, releaseDate, updateURL };
    global.mainWindow.webContents.send('update-downloaded', latestUpdateDownloaded);
});
