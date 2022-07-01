/*
Copyright 2016 Aviral Dasgupta
Copyright 2016 OpenMarket Ltd
Copyright 2017, 2019 Michael Telatynski <7t3chguy@gmail.com>
Copyright 2018 - 2021 New Vector Ltd

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

// Squirrel on windows starts the app with various flags as hooks to tell us when we've been installed/uninstalled etc.
import "./squirrelhooks";
import {
    app,
    BrowserWindow,
    Menu,
    autoUpdater,
    protocol,
    dialog,
} from "electron";
import AutoLaunch from "auto-launch";
import path from "path";
import windowStateKeeper from 'electron-window-state';
import Store from 'electron-store';
import fs, { promises as afs } from "fs";
import { URL } from "url";
import minimist from "minimist";

import "./ipc";
import "./keytar";
import "./seshat";
import "./settings";
import * as tray from "./tray";
import { buildMenuTemplate } from './vectormenu';
import webContentsHandler from './webcontents-handler';
import * as updater from './updater';
import { getProfileFromDeeplink, protocolInit } from './protocol';
import { _t, AppLocalization } from './language-helper';
import Input = Electron.Input;

const argv = minimist(process.argv, {
    alias: { help: "h" },
});

// Things we need throughout the file but need to be created
// async to are initialised in setupGlobals()
let asarPath: string;
let resPath: string;
let iconPath: string;

if (argv["help"]) {
    console.log("Options:");
    console.log("  --profile-dir {path}: Path to where to store the profile.");
    console.log("  --profile {name}:     Name of alternate profile to use, allows for running multiple accounts.");
    console.log("  --devtools:           Install and use react-devtools and react-perf.");
    console.log("  --no-update:          Disable automatic updating.");
    console.log("  --hidden:             Start the application hidden in the system tray.");
    console.log("  --help:               Displays this help message.");
    console.log("And more such as --proxy, see:" +
        "https://electronjs.org/docs/api/command-line-switches");
    app.exit();
}

// Electron creates the user data directory (with just an empty 'Dictionaries' directory...)
// as soon as the app path is set, so pick a random path in it that must exist if it's a
// real user data directory.
function isRealUserDataDir(d: string): boolean {
    return fs.existsSync(path.join(d, 'IndexedDB'));
}

// check if we are passed a profile in the SSO callback url
let userDataPath: string;

const userDataPathInProtocol = getProfileFromDeeplink(argv["_"]);
if (userDataPathInProtocol) {
    userDataPath = userDataPathInProtocol;
} else if (argv['profile-dir']) {
    userDataPath = argv['profile-dir'];
} else {
    let newUserDataPath = app.getPath('userData');
    if (argv['profile']) {
        newUserDataPath += '-' + argv['profile'];
    }
    const newUserDataPathExists = isRealUserDataDir(newUserDataPath);
    let oldUserDataPath = path.join(app.getPath('appData'), app.getName().replace('Element', 'Riot'));
    if (argv['profile']) {
        oldUserDataPath += '-' + argv['profile'];
    }

    const oldUserDataPathExists = isRealUserDataDir(oldUserDataPath);
    console.log(newUserDataPath + " exists: " + (newUserDataPathExists ? 'yes' : 'no'));
    console.log(oldUserDataPath + " exists: " + (oldUserDataPathExists ? 'yes' : 'no'));
    if (!newUserDataPathExists && oldUserDataPathExists) {
        console.log("Using legacy user data path: " + oldUserDataPath);
        userDataPath = oldUserDataPath;
    } else {
        userDataPath = newUserDataPath;
    }
}
app.setPath('userData', userDataPath);

async function tryPaths(name: string, root: string, rawPaths: string[]): Promise<string> {
    // Make everything relative to root
    const paths = rawPaths.map(p => path.join(root, p));

    for (const p of paths) {
        try {
            await afs.stat(p);
            return p + '/';
        } catch (e) {
        }
    }
    console.log(`Couldn't find ${name} files in any of: `);
    for (const p of paths) {
        console.log("\t"+path.resolve(p));
    }
    throw new Error(`Failed to find ${name} files`);
}

// Find the webapp resources and set up things that require them
async function setupGlobals(): Promise<void> {
    // find the webapp asar.
    asarPath = await tryPaths("webapp", __dirname, [
        // If run from the source checkout, this will be in the directory above
        '../webapp.asar',
        // but if run from a packaged application, electron-main.js will be in
        // a different asar file so it will be two levels above
        '../../webapp.asar',
        // also try without the 'asar' suffix to allow symlinking in a directory
        '../webapp',
        // from a packaged application
        '../../webapp',
    ]);

    // we assume the resources path is in the same place as the asar
    resPath = await tryPaths("res", path.dirname(asarPath), [
        // If run from the source checkout
        'res',
        // if run from packaged application
        '',
    ]);

    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        global.vectorConfig = require(asarPath + 'config.json');
    } catch (e) {
        // it would be nice to check the error code here and bail if the config
        // is unparsable, but we get MODULE_NOT_FOUND in the case of a missing
        // file or invalid json, so node is just very unhelpful.
        // Continue with the defaults (ie. an empty config)
        global.vectorConfig = {};
    }

    try {
        // Load local config and use it to override values from the one baked with the build
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const localConfig = require(path.join(app.getPath('userData'), 'config.json'));

        // If the local config has a homeserver defined, don't use the homeserver from the build
        // config. This is to avoid a problem where Riot thinks there are multiple homeservers
        // defined, and panics as a result.
        const homeserverProps = ['default_is_url', 'default_hs_url', 'default_server_name', 'default_server_config'];
        if (Object.keys(localConfig).find(k => homeserverProps.includes(k))) {
            // Rip out all the homeserver options from the vector config
            global.vectorConfig = Object.keys(global.vectorConfig)
                .filter(k => !homeserverProps.includes(k))
                .reduce((obj, key) => {obj[key] = global.vectorConfig[key]; return obj;}, {});
        }

        global.vectorConfig = Object.assign(global.vectorConfig, localConfig);
    } catch (e) {
        if (e instanceof SyntaxError) {
            dialog.showMessageBox({
                type: "error",
                title: `Your ${global.vectorConfig.brand || 'Element'} is misconfigured`,
                message: `Your custom ${global.vectorConfig.brand || 'Element'} configuration contains invalid JSON. ` +
                         `Please correct the problem and reopen ${global.vectorConfig.brand || 'Element'}.`,
                detail: e.message || "",
            });
        }

        // Could not load local config, this is expected in most cases.
    }

    // The tray icon
    // It's important to call `path.join` so we don't end up with the packaged asar in the final path.
    const iconFile = `element.${process.platform === 'win32' ? 'ico' : 'png'}`;
    iconPath = path.join(resPath, "img", iconFile);
    global.trayConfig = {
        icon_path: iconPath,
        brand: global.vectorConfig.brand || 'Element',
    };

    // launcher
    global.launcher = new AutoLaunch({
        name: global.vectorConfig.brand || 'Element',
        isHidden: true,
        mac: {
            useLaunchAgent: true,
        },
    });
}

async function moveAutoLauncher(): Promise<void> {
    // Look for an auto-launcher under 'Riot' and if we find one, port it's
    // enabled/disabled-ness over to the new 'Element' launcher
    if (!global.vectorConfig.brand || global.vectorConfig.brand === 'Element') {
        const oldLauncher = new AutoLaunch({
            name: 'Riot',
            isHidden: true,
            mac: {
                useLaunchAgent: true,
            },
        });
        const wasEnabled = await oldLauncher.isEnabled();
        if (wasEnabled) {
            await oldLauncher.disable();
            await global.launcher.enable();
        }
    }
}

global.store = new Store({ name: "electron-config" });

global.appQuitting = false;

const exitShortcuts: Array<(input: Input, platform: string) => boolean> = [
    (input, platform) => platform !== 'darwin' && input.alt && input.key.toUpperCase() === 'F4',
    (input, platform) => platform !== 'darwin' && input.control && input.key.toUpperCase() === 'Q',
    (input, platform) => platform === 'darwin' && input.meta && input.key.toUpperCase() === 'Q',
];

const warnBeforeExit = (event: Event, input: Input): void => {
    const shouldWarnBeforeExit = global.store.get('warnBeforeExit', true);
    const exitShortcutPressed =
        input.type === 'keyDown' && exitShortcuts.some(shortcutFn => shortcutFn(input, process.platform));

    if (shouldWarnBeforeExit && exitShortcutPressed) {
        const shouldCancelCloseRequest = dialog.showMessageBoxSync(global.mainWindow, {
            type: "question",
            buttons: [_t("Cancel"), _t("Close Element")],
            message: _t("Are you sure you want to quit?"),
            defaultId: 1,
            cancelId: 0,
        }) === 0;

        if (shouldCancelCloseRequest) {
            event.preventDefault();
        }
    }
};

// handle uncaught errors otherwise it displays
// stack traces in popup dialogs, which is terrible (which
// it will do any time the auto update poke fails, and there's
// no other way to catch this error).
// Assuming we generally run from the console when developing,
// this is far preferable.
process.on('uncaughtException', function(error: Error): void {
    console.log('Unhandled exception', error);
});

app.commandLine.appendSwitch('--enable-usermedia-screen-capturing');
if (!app.commandLine.hasSwitch('enable-features')) {
    app.commandLine.appendSwitch('enable-features', 'WebRTCPipeWireCapturer');
}

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
    console.log('Other instance detected: exiting');
    app.exit();
}

// do this after we know we are the primary instance of the app
protocolInit();

// Register the scheme the app is served from as 'standard'
// which allows things like relative URLs and IndexedDB to
// work.
// Also mark it as secure (ie. accessing resources from this
// protocol and HTTPS won't trigger mixed content warnings).
protocol.registerSchemesAsPrivileged([{
    scheme: 'vector',
    privileges: {
        standard: true,
        secure: true,
        supportFetchAPI: true,
    },
}]);

// Turn the sandbox on for *all* windows we might generate. Doing this means we don't
// have to specify a `sandbox: true` to each BrowserWindow.
//
// This also fixes an issue with window.open where if we only specified the sandbox
// on the main window we'd run into cryptic "ipc_renderer be broke" errors. Turns out
// it's trying to jump the sandbox and make some calls into electron, which it can't
// do when half of it is sandboxed. By turning on the sandbox for everything, the new
// window (no matter how temporary it may be) is also sandboxed, allowing for a clean
// transition into the user's browser.
app.enableSandbox();

// We disable media controls here. We do this because calls use audio and video elements and they sometimes capture the media keys. See https://github.com/vector-im/element-web/issues/15704
app.commandLine.appendSwitch('disable-features', 'HardwareMediaKeyHandling,MediaSessionService');

// Disable hardware acceleration if the setting has been set.
if (global.store.get('disableHardwareAcceleration', false) === true) {
    console.log("Disabling hardware acceleration.");
    app.disableHardwareAcceleration();
}

app.on('ready', async () => {
    try {
        await setupGlobals();
        await moveAutoLauncher();
    } catch (e) {
        console.log("App setup failed: exiting", e);
        process.exit(1);
        // process.exit doesn't cause node to stop running code immediately,
        // so return (we could let the exception propagate but then we end up
        // with node printing all sorts of stuff about unhandled exceptions
        // when we want the actual error to be as obvious as possible).
        return;
    }

    if (argv['devtools']) {
        try {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const { default: installExt, REACT_DEVELOPER_TOOLS, REACT_PERF } = require('electron-devtools-installer');
            installExt(REACT_DEVELOPER_TOOLS)
                .then((name) => console.log(`Added Extension: ${name}`))
                .catch((err) => console.log('An error occurred: ', err));
            installExt(REACT_PERF)
                .then((name) => console.log(`Added Extension: ${name}`))
                .catch((err) => console.log('An error occurred: ', err));
        } catch (e) {
            console.log(e);
        }
    }

    protocol.registerFileProtocol('vector', (request, callback) => {
        if (request.method !== 'GET') {
            callback({ error: -322 }); // METHOD_NOT_SUPPORTED from chromium/src/net/base/net_error_list.h
            return null;
        }

        const parsedUrl = new URL(request.url);
        if (parsedUrl.protocol !== 'vector:') {
            callback({ error: -302 }); // UNKNOWN_URL_SCHEME
            return;
        }
        if (parsedUrl.host !== 'vector') {
            callback({ error: -105 }); // NAME_NOT_RESOLVED
            return;
        }

        const target = parsedUrl.pathname.split('/');

        // path starts with a '/'
        if (target[0] !== '') {
            callback({ error: -6 }); // FILE_NOT_FOUND
            return;
        }

        if (target[target.length - 1] == '') {
            target[target.length - 1] = 'index.html';
        }

        let baseDir: string;
        if (target[1] === 'webapp') {
            baseDir = asarPath;
        } else {
            callback({ error: -6 }); // FILE_NOT_FOUND
            return;
        }

        // Normalise the base dir and the target path separately, then make sure
        // the target path isn't trying to back out beyond its root
        baseDir = path.normalize(baseDir);

        const relTarget = path.normalize(path.join(...target.slice(2)));
        if (relTarget.startsWith('..')) {
            callback({ error: -6 }); // FILE_NOT_FOUND
            return;
        }
        const absTarget = path.join(baseDir, relTarget);

        callback({
            path: absTarget,
        });
    });

    if (argv['no-update']) {
        console.log('Auto update disabled via command line flag "--no-update"');
    } else if (global.vectorConfig['update_base_url']) {
        console.log(`Starting auto update with base URL: ${global.vectorConfig['update_base_url']}`);
        updater.start(global.vectorConfig['update_base_url']);
    } else {
        console.log('No update_base_url is defined: auto update is disabled');
    }

    // Load the previous window state with fallback to defaults
    const mainWindowState = windowStateKeeper({
        defaultWidth: 1024,
        defaultHeight: 768,
    });

    const preloadScript = path.normalize(`${__dirname}/preload.js`);
    global.mainWindow = new BrowserWindow({
        // https://www.electronjs.org/docs/faq#the-font-looks-blurry-what-is-this-and-what-can-i-do
        backgroundColor: '#fff',

        icon: iconPath,
        show: false,
        autoHideMenuBar: global.store.get('autoHideMenuBar', true),

        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height,
        webPreferences: {
            preload: preloadScript,
            nodeIntegration: false,
            //sandbox: true, // We enable sandboxing from app.enableSandbox() above
            contextIsolation: true,
            webgl: true,
        },
    });
    global.mainWindow.loadURL('vector://vector/webapp/');

    // Handle spellchecker
    // For some reason spellCheckerEnabled isn't persisted, so we have to use the store here
    global.mainWindow.webContents.session.setSpellCheckerEnabled(global.store.get("spellCheckerEnabled", true));

    // Create trayIcon icon
    if (global.store.get('minimizeToTray', true)) tray.create(global.trayConfig);

    global.mainWindow.once('ready-to-show', () => {
        mainWindowState.manage(global.mainWindow);

        if (!argv['hidden']) {
            global.mainWindow.show();
        } else {
            // hide here explicitly because window manage above sometimes shows it
            global.mainWindow.hide();
        }
    });

    global.mainWindow.webContents.on('before-input-event', warnBeforeExit);

    global.mainWindow.on('closed', () => {
        global.mainWindow = null;
    });
    global.mainWindow.on('close', async (e) => {
        // If we are not quitting and have a tray icon then minimize to tray
        if (!global.appQuitting && (tray.hasTray() || process.platform === 'darwin')) {
            // On Mac, closing the window just hides it
            // (this is generally how single-window Mac apps
            // behave, eg. Mail.app)
            e.preventDefault();

            if (global.mainWindow.isFullScreen()) {
                global.mainWindow.once('leave-full-screen', () => global.mainWindow.hide());

                global.mainWindow.setFullScreen(false);
            } else {
                global.mainWindow.hide();
            }

            return false;
        }
    });

    if (process.platform === 'win32') {
        // Handle forward/backward mouse buttons in Windows
        global.mainWindow.on('app-command', (e, cmd) => {
            if (cmd === 'browser-backward' && global.mainWindow.webContents.canGoBack()) {
                global.mainWindow.webContents.goBack();
            } else if (cmd === 'browser-forward' && global.mainWindow.webContents.canGoForward()) {
                global.mainWindow.webContents.goForward();
            }
        });
    }

    webContentsHandler(global.mainWindow.webContents);

    global.appLocalization = new AppLocalization({
        store: global.store,
        components: [
            () => tray.initApplicationMenu(),
            () => Menu.setApplicationMenu(buildMenuTemplate()),
        ],
    });
});

app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
    global.mainWindow.show();
});

function beforeQuit(): void {
    global.appQuitting = true;
    global.mainWindow?.webContents.send('before-quit');
}

app.on('before-quit', beforeQuit);
autoUpdater.on('before-quit-for-update', beforeQuit);

app.on('second-instance', (ev, commandLine, workingDirectory) => {
    // If other instance launched with --hidden then skip showing window
    if (commandLine.includes('--hidden')) return;

    // Someone tried to run a second instance, we should focus our window.
    if (global.mainWindow) {
        if (!global.mainWindow.isVisible()) global.mainWindow.show();
        if (global.mainWindow.isMinimized()) global.mainWindow.restore();
        global.mainWindow.focus();
    }
});

// Set the App User Model ID to match what the squirrel
// installer uses for the shortcut icon.
// This makes notifications work on windows 8.1 (and is
// a noop on other platforms).
app.setAppUserModelId('com.squirrel.element-desktop.Element');
