/*
Copyright 2024 New Vector Ltd.
Copyright 2018, 2019 , 2021 New Vector Ltd

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import { ipcRenderer, contextBridge, IpcRendererEvent } from "electron";

// Expose only expected IPC wrapper APIs to the renderer process to avoid
// handing out generalised messaging access.

const CHANNELS = [
    "app_onAction",
    "before-quit",
    "check_updates",
    "install_update",
    "ipcCall",
    "ipcReply",
    "loudNotification",
    "preferences",
    "seshat",
    "seshatReply",
    "setBadgeCount",
    "update-downloaded",
    "userDownloadCompleted",
    "userDownloadAction",
    "openDesktopCapturerSourcePicker",
    "userAccessToken",
    "serverSupportedVersions",
];

contextBridge.exposeInMainWorld("electron", {
    on(channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void): void {
        if (!CHANNELS.includes(channel)) {
            console.error(`Unknown IPC channel ${channel} ignored`);
            return;
        }
        ipcRenderer.on(channel, listener);
    },
    send(channel: string, ...args: any[]): void {
        if (!CHANNELS.includes(channel)) {
            console.error(`Unknown IPC channel ${channel} ignored`);
            return;
        }
        ipcRenderer.send(channel, ...args);
    },
});
