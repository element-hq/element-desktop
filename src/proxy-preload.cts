/*
Copyright 2026 tim2zg

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { contextBridge, ipcRenderer } from "electron";
import type { DesktopProxyConfig } from "./proxy.js" with { "resolution-mode": "import" };

const SETTING_KEY = "desktopProxyConfig";

async function getSetting(): Promise<DesktopProxyConfig | undefined> {
    return ipcRenderer.invoke("getSettingValue", SETTING_KEY);
}

async function saveSetting(value: DesktopProxyConfig): Promise<void> {
    return ipcRenderer.invoke("setSettingValue", SETTING_KEY, value);
}

async function getStrings(): Promise<Record<string, string>> {
    return ipcRenderer.invoke("getProxyStrings");
}

contextBridge.exposeInMainWorld("proxyApi", {
    getProxyConfig: async () => getSetting(),
    saveProxyConfig: async (cfg: DesktopProxyConfig) => {
        try {
            await saveSetting(cfg);
            return { ok: true };
        } catch (e: any) {
            return { ok: false, error: e?.message || String(e) };
        }
    },
    getStrings: async () => getStrings(),
    closeWindow: () => {
        ipcRenderer.send("proxyWindowClose");
    },
    resizeWindow: (width: number, height: number) => {
        ipcRenderer.send("proxyWindowResize", width, height);
    },
});
