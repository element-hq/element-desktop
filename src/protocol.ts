/*
Copyright 2020 The Matrix.org Foundation C.I.C.

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

import { app } from "electron";
import { URL } from "url";
import path from "path";
import fs from "fs";

const PROTOCOL = "element:";
const SEARCH_PARAM = "element-desktop-ssoid";
const STORE_FILE_NAME = "sso-sessions.json";

// we getPath userData before electron-main changes it, so this is the default value
const storePath = path.join(app.getPath("userData"), STORE_FILE_NAME);

function processUrl(url: string): void {
    if (!global.mainWindow) return;

    const parsed = new URL(url);
    // sanity check: we only register for the one protocol, so we shouldn't
    // be getting anything else unless the user is forcing a URL to open
    // with the Element app.
    if (parsed.protocol !== PROTOCOL) {
        console.log("Ignoring unexpected protocol: ", parsed.protocol);
        return;
    }

    const urlToLoad = new URL("vector://vector/webapp/");
    // ignore anything other than the search (used for SSO login redirect)
    // and the hash (for general element deep links)
    // There's no reason to allow anything else, particularly other paths,
    // since this would allow things like the internal jitsi wrapper to
    // be loaded, which would get the app stuck on that page and generally
    // be a bit strange and confusing.
    urlToLoad.search = parsed.search;
    urlToLoad.hash = parsed.hash;

    console.log("Opening URL: ", urlToLoad.href);
    global.mainWindow.loadURL(urlToLoad.href);
}

function readStore(): object {
    try {
        const s = fs.readFileSync(storePath, { encoding: "utf8" });
        const o = JSON.parse(s);
        return typeof o === "object" ? o : {};
    } catch (e) {
        return {};
    }
}

function writeStore(data: object): void {
    fs.writeFileSync(storePath, JSON.stringify(data));
}

export function recordSSOSession(sessionID: string): void {
    const userDataPath = app.getPath('userData');
    const store = readStore();
    for (const key in store) {
        // ensure each instance only has one (the latest) session ID to prevent the file growing unbounded
        if (store[key] === userDataPath) {
            delete store[key];
            break;
        }
    }
    store[sessionID] = userDataPath;
    writeStore(store);
}

export function getProfileFromDeeplink(args): string | undefined {
    // check if we are passed a profile in the SSO callback url
    const deeplinkUrl = args.find(arg => arg.startsWith(PROTOCOL + '//'));
    if (deeplinkUrl && deeplinkUrl.includes(SEARCH_PARAM)) {
        const parsedUrl = new URL(deeplinkUrl);
        if (parsedUrl.protocol === PROTOCOL) {
            const ssoID = parsedUrl.searchParams.get(SEARCH_PARAM);
            const store = readStore();
            console.log("Forwarding to profile: ", store[ssoID]);
            return store[ssoID];
        }
    }
}

export function protocolInit(): void {
    // get all args except `hidden` as it'd mean the app would not get focused
    // XXX: passing args to protocol handlers only works on Windows, so unpackaged deep-linking
    // --profile/--profile-dir are passed via the SEARCH_PARAM var in the callback url
    const args = process.argv.slice(1).filter(arg => arg !== "--hidden" && arg !== "-hidden");
    if (app.isPackaged) {
        app.setAsDefaultProtocolClient('element', process.execPath, args);
    } else if (process.platform === 'win32') { // on Mac/Linux this would just cause the electron binary to open
        // special handler for running without being packaged, e.g `electron .` by passing our app path to electron
        app.setAsDefaultProtocolClient('element', process.execPath, [app.getAppPath(), ...args]);
    }

    if (process.platform === 'darwin') {
        // Protocol handler for macos
        app.on('open-url', function(ev, url) {
            ev.preventDefault();
            processUrl(url);
        });
    } else {
        // Protocol handler for win32/Linux
        app.on('second-instance', (ev, commandLine) => {
            const url = commandLine[commandLine.length - 1];
            if (!url.startsWith(PROTOCOL + '//')) return;
            processUrl(url);
        });
    }
}
