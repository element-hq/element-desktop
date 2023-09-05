/*
Copyright 2017 Karl Glatz <karl@glatz.biz>
Copyright 2017 OpenMarket Ltd

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

import { app, Tray, Menu, nativeImage } from "electron";
import pngToIco from "png-to-ico";
import path from "path";
import fs from "fs";
import { v5 as uuidv5 } from "uuid";

import { _t } from "./language-helper";

let trayIcon: Tray | null = null;

export function hasTray(): boolean {
    return trayIcon !== null;
}

export function destroy(): void {
    if (trayIcon) {
        trayIcon.destroy();
        trayIcon = null;
    }
}

function toggleWin(): void {
    if (global.mainWindow?.isVisible() && !global.mainWindow.isMinimized() && global.mainWindow.isFocused()) {
        global.mainWindow.hide();
    } else {
        if (global.mainWindow?.isMinimized()) global.mainWindow.restore();
        if (!global.mainWindow?.isVisible()) global.mainWindow?.show();
        global.mainWindow?.focus();
    }
}

interface IConfig {
    icon_path: string; // eslint-disable-line camelcase
    brand: string;
}

function getUuid(): string {
    // The uuid field is optional and only needed on unsigned Windows packages where the executable path changes
    // The hardcoded uuid is an arbitrary v4 uuid generated on https://www.uuidgenerator.net/version4
    return global.vectorConfig["uuid"] || "eba84003-e499-4563-8e9d-166e34b5cc25";
}

export function create(config: IConfig): void {
    // no trays on darwin
    if (process.platform === "darwin" || trayIcon) return;
    const defaultIcon = nativeImage.createFromPath(config.icon_path);

    let guid: string | undefined;
    if (process.platform === "win32" && app.isPackaged) {
        // Providing a GUID lets Windows be smarter about maintaining user's tray preferences
        // https://github.com/electron/electron/pull/21891
        // Ideally we would only specify it for signed packages but determining whether the app is signed sufficiently
        // is non-trivial. So instead we have an escape hatch that unsigned packages can iterate the `uuid` in
        // config.json to prevent Windows refusing GUID-reuse if their executable path changes.
        guid = uuidv5(`${app.getName()}-${app.getPath("userData")}`, getUuid());
    }

    trayIcon = new Tray(defaultIcon, guid);
    trayIcon.setToolTip(config.brand);
    initApplicationMenu();
    trayIcon.on("click", toggleWin);

    let lastFavicon: string | null = null;
    global.mainWindow?.webContents.on("page-favicon-updated", async function (ev, favicons) {
        if (!favicons || favicons.length <= 0 || !favicons[0].startsWith("data:")) {
            if (lastFavicon !== null) {
                global.mainWindow?.setIcon(defaultIcon);
                trayIcon?.setImage(defaultIcon);
                lastFavicon = null;
            }
            return;
        }

        // No need to change, shortcut
        if (favicons[0] === lastFavicon) return;
        lastFavicon = favicons[0];

        let newFavicon = nativeImage.createFromDataURL(favicons[0]);

        // Windows likes ico's too much.
        if (process.platform === "win32") {
            try {
                const icoPath = path.join(app.getPath("temp"), "win32_element_icon.ico");
                fs.writeFileSync(icoPath, await pngToIco(newFavicon.toPNG()));
                newFavicon = nativeImage.createFromPath(icoPath);
            } catch (e) {
                console.error("Failed to make win32 ico", e);
            }
        }

        trayIcon?.setImage(newFavicon);
        global.mainWindow?.setIcon(newFavicon);
    });

    global.mainWindow?.webContents.on("page-title-updated", function (ev, title) {
        trayIcon?.setToolTip(title);
    });
}

export function initApplicationMenu(): void {
    if (!trayIcon) {
        return;
    }

    const contextMenu = Menu.buildFromTemplate([
        {
            label: _t("action|show_hide"),
            click: toggleWin,
        },
        { type: "separator" },
        {
            label: _t("action|quit"),
            click: function (): void {
                app.quit();
            },
        },
    ]);

    trayIcon.setContextMenu(contextMenu);
}
