/*
Copyright 2022-2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import { app, autoUpdater, desktopCapturer, ipcMain, powerSaveBlocker, TouchBar, nativeImage } from "electron";
import { relaunchApp } from "electron-clear-data";

import IpcMainEvent = Electron.IpcMainEvent;
import { recordSSOSession } from "./protocol";
import { randomArray } from "./utils";
import { Settings } from "./settings";
import { keytar } from "./keytar";
import { getDisplayMediaCallback, setDisplayMediaCallback } from "./displayMediaCallback";

ipcMain.on("setBadgeCount", function (_ev: IpcMainEvent, count: number): void {
    if (process.platform !== "win32") {
        // only set badgeCount on Mac/Linux, the docs say that only those platforms support it but turns out Electron
        // has some Windows support too, and in some Windows environments this leads to two badges rendering atop
        // each other. See https://github.com/vector-im/element-web/issues/16942
        app.badgeCount = count;
    }
    if (count === 0) {
        global.mainWindow?.flashFrame(false);
    }
});

let focusHandlerAttached = false;
ipcMain.on("loudNotification", function (): void {
    if (process.platform === "win32" || process.platform === "linux") {
        if (global.mainWindow && !global.mainWindow.isFocused() && !focusHandlerAttached) {
            global.mainWindow.flashFrame(true);
            global.mainWindow.once("focus", () => {
                global.mainWindow?.flashFrame(false);
                focusHandlerAttached = false;
            });
            focusHandlerAttached = true;
        }
    }
});

let powerSaveBlockerId: number | null = null;
ipcMain.on("app_onAction", function (_ev: IpcMainEvent, payload) {
    switch (payload.action) {
        case "call_state": {
            if (powerSaveBlockerId !== null && powerSaveBlocker.isStarted(powerSaveBlockerId)) {
                if (payload.state === "ended") {
                    powerSaveBlocker.stop(powerSaveBlockerId);
                    powerSaveBlockerId = null;
                }
            } else {
                if (powerSaveBlockerId === null && payload.state === "connected") {
                    powerSaveBlockerId = powerSaveBlocker.start("prevent-display-sleep");
                }
            }
            break;
        }
    }
});

ipcMain.on("ipcCall", async function (_ev: IpcMainEvent, payload) {
    if (!global.mainWindow) return;

    const args = payload.args || [];
    let ret: any;

    switch (payload.name) {
        case "getUpdateFeedUrl":
            ret = autoUpdater.getFeedURL();
            break;
        case "getSettingValue": {
            const [settingName] = args;
            const setting = Settings[settingName];
            ret = await setting.read();
            break;
        }
        case "setSettingValue": {
            const [settingName, value] = args;
            const setting = Settings[settingName];
            await setting.write(value);
            break;
        }
        case "setLanguage":
            global.appLocalization.setAppLocale(args[0]);
            break;
        case "getAppVersion":
            ret = app.getVersion();
            break;
        case "focusWindow":
            if (global.mainWindow.isMinimized()) {
                global.mainWindow.restore();
            } else {
                global.mainWindow.show();
                global.mainWindow.focus();
            }
            break;
        case "getConfig":
            ret = global.vectorConfig;
            break;
        case "navigateBack":
            if (global.mainWindow.webContents.canGoBack()) {
                global.mainWindow.webContents.goBack();
            }
            break;
        case "navigateForward":
            if (global.mainWindow.webContents.canGoForward()) {
                global.mainWindow.webContents.goForward();
            }
            break;
        case "setSpellCheckEnabled":
            if (typeof args[0] !== "boolean") return;

            global.mainWindow.webContents.session.setSpellCheckerEnabled(args[0]);
            global.store.set("spellCheckerEnabled", args[0]);
            break;

        case "getSpellCheckEnabled":
            ret = global.store.get("spellCheckerEnabled", true);
            break;

        case "setSpellCheckLanguages":
            try {
                global.mainWindow.webContents.session.setSpellCheckerLanguages(args[0]);
            } catch (er) {
                console.log("There were problems setting the spellcheck languages", er);
            }
            break;

        case "getSpellCheckLanguages":
            ret = global.mainWindow.webContents.session.getSpellCheckerLanguages();
            break;
        case "getAvailableSpellCheckLanguages":
            ret = global.mainWindow.webContents.session.availableSpellCheckerLanguages;
            break;

        case "startSSOFlow":
            recordSSOSession(args[0]);
            break;

        case "getPickleKey":
            try {
                ret = await keytar?.getPassword("element.io", `${args[0]}|${args[1]}`);
                // migrate from riot.im (remove once we think there will no longer be
                // logins from the time of riot.im)
                if (ret === null) {
                    ret = await keytar?.getPassword("riot.im", `${args[0]}|${args[1]}`);
                }
            } catch (e) {
                // if an error is thrown (e.g. keytar can't connect to the keychain),
                // then return null, which means the default pickle key will be used
                ret = null;
            }
            break;

        case "createPickleKey":
            try {
                const pickleKey = await randomArray(32);
                await keytar?.setPassword("element.io", `${args[0]}|${args[1]}`, pickleKey);
                ret = pickleKey;
            } catch (e) {
                ret = null;
            }
            break;

        case "destroyPickleKey":
            try {
                await keytar?.deletePassword("element.io", `${args[0]}|${args[1]}`);
                // migrate from riot.im (remove once we think there will no longer be
                // logins from the time of riot.im)
                await keytar?.deletePassword("riot.im", `${args[0]}|${args[1]}`);
            } catch (e) {}
            break;
        case "getDesktopCapturerSources":
            ret = (await desktopCapturer.getSources(args[0])).map((source) => ({
                id: source.id,
                name: source.name,
                thumbnailURL: source.thumbnail.toDataURL(),
            }));
            break;
        case "callDisplayMediaCallback":
            await getDisplayMediaCallback()?.({ video: args[0] });
            setDisplayMediaCallback(null);
            ret = null;
            break;

        case "clearStorage":
            global.store.clear();
            global.mainWindow.webContents.session.flushStorageData();
            await global.mainWindow.webContents.session.clearStorageData();
            relaunchApp();
            return; // the app is about to stop, we don't need to reply to the IPC

        case "breadcrumbs": {
            if (process.platform === "darwin") {
                const { TouchBarPopover, TouchBarButton } = TouchBar;

                const recentsBar = new TouchBar({
                    items: args[0].map((r: { roomId: string; avatarUrl: string | null; initial: string }) => {
                        const defaultColors = ["#0DBD8B", "#368bd6", "#ac3ba8"];
                        let total = 0;
                        for (let i = 0; i < r.roomId.length; ++i) {
                            total += r.roomId.charCodeAt(i);
                        }

                        const button = new TouchBarButton({
                            label: r.initial,
                            backgroundColor: defaultColors[total % defaultColors.length],
                            click: (): void => {
                                void global.mainWindow?.loadURL(`vector://vector/webapp/#/room/${r.roomId}`);
                            },
                        });
                        if (r.avatarUrl) {
                            void fetch(r.avatarUrl)
                                .then((resp) => {
                                    if (!resp.ok) return;
                                    return resp.arrayBuffer();
                                })
                                .then((arrayBuffer) => {
                                    if (!arrayBuffer) return;
                                    const buffer = Buffer.from(arrayBuffer);
                                    button.icon = nativeImage.createFromBuffer(buffer);
                                    button.label = "";
                                    button.backgroundColor = "";
                                });
                        }
                        return button;
                    }),
                });

                const touchBar = new TouchBar({
                    items: [
                        new TouchBarPopover({
                            label: "Recents",
                            showCloseButton: true,
                            items: recentsBar,
                        }),
                    ],
                });
                global.mainWindow.setTouchBar(touchBar);
            }
            break;
        }

        default:
            global.mainWindow.webContents.send("ipcReply", {
                id: payload.id,
                error: "Unknown IPC Call: " + payload.name,
            });
            return;
    }

    global.mainWindow?.webContents.send("ipcReply", {
        id: payload.id,
        reply: ret,
    });
});
