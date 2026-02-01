/*
Copyright 2026 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { BrowserWindow, ipcMain, app } from "electron";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";
import fs from "node:fs";

let proxyWindow: BrowserWindow | null = null;

const __dirnameResolved = path.dirname(fileURLToPath(import.meta.url));

function pickExisting(paths: string[]): string | null {
    for (const p of paths) {
        if (fs.existsSync(p)) return p;
    }
    return null;
}

/**
 * Opens the native proxy settings window.
 *
 * If the window is already open, it will be brought to focus.
 * Attempts to locate the necessary preload script and HTML asset from
 * both source-relative paths (dev) and bundled paths (packaged app).
 */
export function createProxyWindow(): void {
    if (proxyWindow && !proxyWindow.isDestroyed()) {
        proxyWindow.focus();
        return;
    }

    // Prefer a CommonJS preload if present
    const preloadPath =
        pickExisting([
            path.join(__dirnameResolved, "proxy-preload.cjs"),
            path.join(__dirnameResolved, "proxy-preload.js"),
            path.join(app.getAppPath(), "lib", "proxy-preload.cjs"),
            path.join(app.getAppPath(), "lib", "proxy-preload.js"),
        ]) ?? path.join(__dirnameResolved, "proxy-preload.js");

    const htmlPath =
        pickExisting([
            path.join(__dirnameResolved, "proxy-window.html"),
            path.join(app.getAppPath(), "lib", "proxy-window.html"),
        ]) ?? path.join(__dirnameResolved, "proxy-window.html");

    proxyWindow = new BrowserWindow({
        width: 540,
        height: 560,
        title: "Network Proxy",
        resizable: false,
        minimizable: false,
        maximizable: false,
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: false,
            preload: preloadPath,
        },
    });

    proxyWindow.on("closed", () => {
        proxyWindow = null;
    });

    proxyWindow.loadURL(pathToFileURL(htmlPath).toString()).catch((e: unknown) => {
        console.error("Failed to load proxy window:", e);
    });
}

if (!ipcMain.listenerCount("proxyWindowClose")) {
    ipcMain.on("proxyWindowClose", () => {
        if (proxyWindow && !proxyWindow.isDestroyed()) {
            proxyWindow.close();
        }
    });
}
if (!ipcMain.listenerCount("proxyWindowResize")) {
    ipcMain.on("proxyWindowResize", (_event: unknown, width: number, height: number) => {
        if (proxyWindow && !proxyWindow.isDestroyed()) {
            try {
                const w = Math.max(width, 400);
                const h = Math.max(height, 200);
                proxyWindow.setContentSize(w, h);
            } catch (e) {
                console.error("Failed to resize proxy window", e);
            }
        }
    });
}
