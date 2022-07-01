/*
Copyright 2022 New Vector Ltd

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
    "Electron.alwaysShowMenuBar": { // not supported on macOS
        async read(): Promise<any> {
            return !global.mainWindow.autoHideMenuBar;
        },
        async write(value: any): Promise<void> {
            global.store.set('autoHideMenuBar', !value);
            global.mainWindow.autoHideMenuBar = !value;
            global.mainWindow.setMenuBarVisibility(value);
        },
    },
    "Electron.showTrayIcon": { // not supported on macOS
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
            global.store.set('minimizeToTray', value);
        },
    },
    "Electron.enableHardwareAcceleration": {
        async read(): Promise<any> {
            return !global.store.get('disableHardwareAcceleration', false);
        },
        async write(value: any): Promise<void> {
            global.store.set('disableHardwareAcceleration', !value);
        },
    },
};
