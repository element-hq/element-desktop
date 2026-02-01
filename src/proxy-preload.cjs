/*
Copyright 2026 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/
const { contextBridge, ipcRenderer } = require("electron");

const SETTING_KEY = "desktopProxyConfig";

async function getSetting() {
    return ipcRenderer.invoke("getSettingValue", SETTING_KEY);
}

async function saveSetting(value) {
    return ipcRenderer.invoke("setSettingValue", SETTING_KEY, value);
}

contextBridge.exposeInMainWorld("proxyApi", {
    getProxyConfig: async () => getSetting(),
    saveProxyConfig: async (cfg) => {
        try {
            await saveSetting(cfg);
            return { ok: true };
        } catch (e) {
            return { ok: false, error: e?.message || String(e) };
        }
    },
    closeWindow: () => {
        ipcRenderer.send("proxyWindowClose");
    },
    resizeWindow: (width, height) => {
        ipcRenderer.send("proxyWindowResize", width, height);
    },
});
