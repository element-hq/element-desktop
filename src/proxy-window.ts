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

export function createProxyWindow(): void {
    if (proxyWindow && !proxyWindow.isDestroyed()) {
        proxyWindow.focus();
        return;
    }

    // Prefer a CommonJS preload if present (robust across module configs)
    const preloadPath = pickExisting([
        path.join(__dirnameResolved, "proxy-preload.cjs"),
        path.join(__dirnameResolved, "proxy-preload.js"),
        path.join(app.getAppPath(), "lib", "proxy-preload.cjs"),
        path.join(app.getAppPath(), "lib", "proxy-preload.js"),
    ]) ?? path.join(__dirnameResolved, "proxy-preload.js");

    // Find the HTML in either compiled lib dir or alongside this file
    const htmlPath = pickExisting([
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

    proxyWindow
        .loadURL(pathToFileURL(htmlPath).toString())
        .catch((e) => {
            console.error("Failed to load proxy window:", e);
        });
}

// Register the close handler once
if (!ipcMain.listenerCount("proxyWindowClose")) {
    ipcMain.on("proxyWindowClose", () => {
        if (proxyWindow && !proxyWindow.isDestroyed()) {
            proxyWindow.close();
        }
    });
}