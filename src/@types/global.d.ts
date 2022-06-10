/*
Copyright 2021 - 2022 New Vector Ltd

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

import { BrowserWindow } from "electron";
import Store from "electron-store";
import AutoLaunch from "auto-launch";

import { AppLocalization } from "../language-helper";

declare global {
    namespace NodeJS {
        interface Global {
            mainWindow: BrowserWindow;
            appQuitting: boolean;
            appLocalization: AppLocalization;
            launcher: AutoLaunch;
            vectorConfig: Record<string, any>;
            trayConfig: {
                // eslint-disable-next-line camelcase
                icon_path: string;
                brand: string;
            };
            store: Store<{
                warnBeforeExit?: boolean;
                minimizeToTray?: boolean;
                spellCheckerEnabled?: boolean;
                autoHideMenuBar?: boolean;
                locale?: string | string[];
                disableHardwareAcceleration?: boolean;
            }>;
        }
    }
}
