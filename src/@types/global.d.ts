/*
Copyright 2021-2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import { BrowserWindow } from "electron";
import Store from "electron-store";
import AutoLaunch from "auto-launch";

import { AppLocalization } from "../language-helper";

// global type extensions need to use var for whatever reason
/* eslint-disable no-var */
declare global {
    var mainWindow: BrowserWindow | null;
    var appQuitting: boolean;
    var appLocalization: AppLocalization;
    var launcher: AutoLaunch;
    var vectorConfig: Record<string, any>;
    var trayConfig: {
        // eslint-disable-next-line camelcase
        icon_path: string;
        brand: string;
    };
    var store: Store<{
        warnBeforeExit?: boolean;
        minimizeToTray?: boolean;
        spellCheckerEnabled?: boolean;
        autoHideMenuBar?: boolean;
        locale?: string | string[];
        disableHardwareAcceleration?: boolean;
    }>;
}
/* eslint-enable no-var */
