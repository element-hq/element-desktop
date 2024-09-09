/*
Copyright 2022-2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import { app, ipcMain } from "electron";
import { promises as afs } from "fs";
import path from "path";

import type {
    Seshat as SeshatType,
    SeshatRecovery as SeshatRecoveryType,
    ReindexError as ReindexErrorType,
} from "matrix-seshat"; // Hak dependency type
import IpcMainEvent = Electron.IpcMainEvent;
import { randomArray } from "./utils";
import { keytar } from "./keytar";

let seshatSupported = false;
let Seshat: typeof SeshatType;
let SeshatRecovery: typeof SeshatRecoveryType;
let ReindexError: typeof ReindexErrorType;

try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const seshatModule = require("matrix-seshat");
    Seshat = seshatModule.Seshat;
    SeshatRecovery = seshatModule.SeshatRecovery;
    ReindexError = seshatModule.ReindexError;
    seshatSupported = true;
} catch (e) {
    if ((<NodeJS.ErrnoException>e).code === "MODULE_NOT_FOUND") {
        console.log("Seshat isn't installed, event indexing is disabled.");
    } else {
        console.warn("Seshat unexpected error:", e);
    }
}

let eventIndex: SeshatType | null = null;

const seshatDefaultPassphrase = "DEFAULT_PASSPHRASE";
async function getOrCreatePassphrase(key: string): Promise<string> {
    if (keytar) {
        try {
            const storedPassphrase = await keytar.getPassword("element.io", key);
            if (storedPassphrase !== null) {
                return storedPassphrase;
            } else {
                const newPassphrase = await randomArray(32);
                await keytar.setPassword("element.io", key, newPassphrase);
                return newPassphrase;
            }
        } catch (e) {
            console.log("Error getting the event index passphrase out of the secret store", e);
        }
    }
    return seshatDefaultPassphrase;
}

const deleteContents = async (p: string): Promise<void> => {
    for (const entry of await afs.readdir(p)) {
        const curPath = path.join(p, entry);
        await afs.unlink(curPath);
    }
};

ipcMain.on("seshat", async function (_ev: IpcMainEvent, payload): Promise<void> {
    if (!global.mainWindow) return;

    // We do this here to ensure we get the path after --profile has been resolved
    const eventStorePath = path.join(app.getPath("userData"), "EventStore");

    const sendError = (id: string, e: Error): void => {
        const error = {
            message: e.message,
        };

        global.mainWindow?.webContents.send("seshatReply", { id, error });
    };

    const args = payload.args || [];
    let ret: any;

    switch (payload.name) {
        case "supportsEventIndexing":
            ret = seshatSupported;
            break;

        case "initEventIndex":
            if (eventIndex === null) {
                const userId = args[0];
                const deviceId = args[1];
                const passphraseKey = `seshat|${userId}|${deviceId}`;

                const passphrase = await getOrCreatePassphrase(passphraseKey);

                try {
                    await afs.mkdir(eventStorePath, { recursive: true });
                    eventIndex = new Seshat(eventStorePath, { passphrase });
                } catch (e) {
                    if (e instanceof ReindexError) {
                        // If this is a reindex error, the index schema
                        // changed. Try to open the database in recovery mode,
                        // reindex the database and finally try to open the
                        // database again.
                        const recoveryIndex = new SeshatRecovery(eventStorePath, {
                            passphrase,
                        });

                        const userVersion = await recoveryIndex.getUserVersion();

                        // If our user version is 0 we'll delete the db
                        // anyways so reindexing it is a waste of time.
                        if (userVersion === 0) {
                            await recoveryIndex.shutdown();

                            try {
                                await deleteContents(eventStorePath);
                            } catch (e) {}
                        } else {
                            await recoveryIndex.reindex();
                        }

                        eventIndex = new Seshat(eventStorePath, { passphrase });
                    } else {
                        sendError(payload.id, <Error>e);
                        return;
                    }
                }
            }
            break;

        case "closeEventIndex":
            if (eventIndex !== null) {
                const index = eventIndex;
                eventIndex = null;

                try {
                    await index.shutdown();
                } catch (e) {
                    sendError(payload.id, <Error>e);
                    return;
                }
            }
            break;

        case "deleteEventIndex": {
            try {
                await deleteContents(eventStorePath);
            } catch (e) {}
            break;
        }

        case "isEventIndexEmpty":
            if (eventIndex === null) ret = true;
            else ret = await eventIndex.isEmpty();
            break;

        case "isRoomIndexed":
            if (eventIndex === null) ret = false;
            else ret = await eventIndex.isRoomIndexed(args[0]);
            break;

        case "addEventToIndex":
            try {
                eventIndex?.addEvent(args[0], args[1]);
            } catch (e) {
                sendError(payload.id, <Error>e);
                return;
            }
            break;

        case "deleteEvent":
            try {
                ret = await eventIndex?.deleteEvent(args[0]);
            } catch (e) {
                sendError(payload.id, <Error>e);
                return;
            }
            break;

        case "commitLiveEvents":
            try {
                ret = await eventIndex?.commit();
            } catch (e) {
                sendError(payload.id, <Error>e);
                return;
            }
            break;

        case "searchEventIndex":
            try {
                ret = await eventIndex?.search(args[0]);
            } catch (e) {
                sendError(payload.id, <Error>e);
                return;
            }
            break;

        case "addHistoricEvents":
            if (eventIndex === null) ret = false;
            else {
                try {
                    ret = await eventIndex.addHistoricEvents(args[0], args[1], args[2]);
                } catch (e) {
                    sendError(payload.id, <Error>e);
                    return;
                }
            }
            break;

        case "getStats":
            if (eventIndex === null) ret = 0;
            else {
                try {
                    ret = await eventIndex.getStats();
                } catch (e) {
                    sendError(payload.id, <Error>e);
                    return;
                }
            }
            break;

        case "removeCrawlerCheckpoint":
            if (eventIndex === null) ret = false;
            else {
                try {
                    ret = await eventIndex.removeCrawlerCheckpoint(args[0]);
                } catch (e) {
                    sendError(payload.id, <Error>e);
                    return;
                }
            }
            break;

        case "addCrawlerCheckpoint":
            if (eventIndex === null) ret = false;
            else {
                try {
                    ret = await eventIndex.addCrawlerCheckpoint(args[0]);
                } catch (e) {
                    sendError(payload.id, <Error>e);
                    return;
                }
            }
            break;

        case "loadFileEvents":
            if (eventIndex === null) ret = [];
            else {
                try {
                    ret = await eventIndex.loadFileEvents(args[0]);
                } catch (e) {
                    sendError(payload.id, <Error>e);
                    return;
                }
            }
            break;

        case "loadCheckpoints":
            if (eventIndex === null) ret = [];
            else {
                try {
                    ret = await eventIndex.loadCheckpoints();
                } catch (e) {
                    ret = [];
                }
            }
            break;

        case "setUserVersion":
            if (eventIndex === null) break;
            else {
                try {
                    await eventIndex.setUserVersion(args[0]);
                } catch (e) {
                    sendError(payload.id, <Error>e);
                    return;
                }
            }
            break;

        case "getUserVersion":
            if (eventIndex === null) ret = 0;
            else {
                try {
                    ret = await eventIndex.getUserVersion();
                } catch (e) {
                    sendError(payload.id, <Error>e);
                    return;
                }
            }
            break;

        default:
            global.mainWindow?.webContents.send("seshatReply", {
                id: payload.id,
                error: "Unknown IPC Call: " + payload.name,
            });
            return;
    }

    global.mainWindow?.webContents.send("seshatReply", {
        id: payload.id,
        reply: ret,
    });
});
