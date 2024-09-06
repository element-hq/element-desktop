/*
Copyright 2022-2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import * as tray from "./tray";

interface Setting {
    read(): Promise<any>;
    write(value: any): Promise<void>;
}

export const Settings: Record<string, Setting> = {
    "Electron.autoLaunch": {
        async read(): Promise<any> {
            return global.launcher.isEnabled();
        },
        async write(value: any): Promise<void> {
            if (value) {
                return global.launcher.enable();
            } else {
                return global.launcher.disable();
            }
        },
    },
    "Electron.warnBeforeExit": {
        async read(): Promise<any> {
            return global.store.get("warnBeforeExit", true);
        },
        async write(value: any): Promise<void> {
            global.store.set("warnBeforeExit", value);
        },
    },
    "Electron.alwaysShowMenuBar": {
        // not supported on macOS
        async read(): Promise<any> {
            return !global.mainWindow!.autoHideMenuBar;
        },
        async write(value: any): Promise<void> {
            global.store.set("autoHideMenuBar", !value);
            global.mainWindow!.autoHideMenuBar = !value;
            global.mainWindow!.setMenuBarVisibility(value);
        },
    },
    "Electron.showTrayIcon": {
        // not supported on macOS
        async read(): Promise<any> {
            return tray.hasTray();
        },
        async write(value: any): Promise<void> {
            if (value) {
                // Create trayIcon icon
                tray.create(global.trayConfig);
            } else {
                tray.destroy();
            }
            global.store.set("minimizeToTray", value);
        },
    },
    "Electron.enableHardwareAcceleration": {
        async read(): Promise<any> {
            return !global.store.get("disableHardwareAcceleration", false);
        },
        async write(value: any): Promise<void> {
            global.store.set("disableHardwareAcceleration", !value);
        },
    },
};
