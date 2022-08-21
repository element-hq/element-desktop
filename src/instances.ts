import { BrowserView, Event, Input, dialog, session, Session, ipcMain, BrowserWindow } from "electron";
import * as path from 'path';
import webContentsHandler from './webcontents-handler';
import { _t } from './language-helper';
import Store from 'electron-store';
import { resize } from "./resizer";
import { emitInstanceUpdate } from "./menu-view";
import { Seshat } from "matrix-seshat";

/**
 * The format stored in electron-config.json
 */
interface InstanceStoreData {
    key: string;
    matrixId: string;
    avatar: string|null;
    // isLegacyDefaultSession?: boolean;
}

let lastAsarPath: string;

/**
 * All Element instances added to Electron
 */
const instances: ElementInstance[] = [];

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

const handleFileProtocolRequest = (asarPath: string) => (
    request: Electron.ProtocolRequest,
    callback: (response: Electron.ProtocolResponse) => void,
) => {
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
};

export class ElementInstance {
    key: string;
    matrixId: string|null;
    avatar: string|null;
    view: BrowserView;
    session: Session;
    eventIndex: Seshat = null;
    badgeCount = 0;
    isLoaded = false;
    constructor(key: string, matrixId: string, avatar: string, asarPath: string) {
        this.key = key;
        this.matrixId = matrixId;
        this.avatar = avatar;
        this.session = session.fromPartition('persist:'+key);
        this.session.protocol.registerFileProtocol('vector', handleFileProtocolRequest(asarPath));

        const preloadScript = path.normalize(`${__dirname}/preload.js`);
        this.view = new BrowserView({
            webPreferences: {
                preload: preloadScript,
                nodeIntegration: false,
                //sandbox: true, // We enable sandboxing from app.enableSandbox() above
                contextIsolation: true,
                webgl: true,
                session: this.session,
            },
        });

        this.view.webContents.loadURL('vector://vector/webapp/');

        // Handle spellchecker
        // For some reason spellCheckerEnabled isn't persisted, so we have to use the store here
        this.session.setSpellCheckerEnabled(global.store.get("spellCheckerEnabled", true));

        this.view.webContents.on('before-input-event', warnBeforeExit);
        webContentsHandler(this.view.webContents);
        // this.view.webContents.openDevTools({mode: 'detach'})

        this.view.webContents.once('did-finish-load', () => {
            this.isLoaded = true;

            // periodically pull current loggedin account
            // TODO: get notified somehow instead of pulling
            setInterval(( ) => {
                this.updateAccountData();
            }, 3000);
        });
    }
    private async updateAccountData() {
        let updated = false;
        const isLoggedIn = await this.view.webContents.executeJavaScript('!!window.mxMatrixClientPeg.get()');
        if (isLoggedIn) {
            const matrixId = await this.view.webContents.executeJavaScript(
                'window.mxMatrixClientPeg.get()?.getUserId() || null',
            );
            if (this.matrixId !== matrixId) {
                this.matrixId = matrixId || null;
                updated = true;
            }

            // get avatar as base64
            // TODO: is there a cleaner way (without triggering any requests)?
            const avatar = await this.view.webContents.executeJavaScript(`
                (function () {
                    let img = document.querySelector('img.mx_UserMenu_userAvatar_BaseAvatar')
                    if(!img) return null
                    img.setAttribute('crossOrigin', 'anonymous');
                    let c = document.createElement('canvas');
                    c.height = img.naturalHeight;
                    c.width = img.naturalWidth;
                    c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
                    return c.toDataURL()
                })()
            `);
            if (this.avatar !== avatar && avatar !== 'data:,') {
                this.avatar = avatar || null;
                updated = true;
            }
        } else {
            if (this.matrixId) updated = true;
            this.matrixId = null;
            this.avatar = null;
        }

        if (updated) {
            emitInstanceUpdate();
            const store = global.store as Store;
            const storedInstances = store.get('instances') as InstanceStoreData[];
            const i = storedInstances.find(i => i.key === this.key);
            i.matrixId = this.matrixId;
            i.avatar = this.avatar;
            store.set('instances', storedInstances);
        }
    }
}
/**
 * creates a new instance and stores it in the electron-config.json
 * called by the instance menu
 */
export function createInstance(key: string) {
    createInstanceView(key, null, null, lastAsarPath, global.mainWindow);
    selectInstance(key);
    emitInstanceUpdate();
    const store = global.store as Store;
    const storedInstances = store.get('instances') as InstanceStoreData[];
    storedInstances.push({
        key,
        matrixId: null,
        avatar: null,
    });
    store.set('instances', storedInstances);
}

/**
 * creates a new ElementInstance containing an electron BrowserView
 */
export function createInstanceView(
    key: string, matrixId: string, avatar: string, asarPath: string, window: BrowserWindow,
) {
    // remeber for later use
    lastAsarPath = asarPath;

    const ins = new ElementInstance(key, matrixId, avatar, asarPath);
    instances.push(ins);
    window.addBrowserView(ins.view);
}

/**
 * loads all instances stored in the electron-config.json
 */
export function loadInstances(store: Store, asarPath: string, window: BrowserWindow) {
    if (!store.has('instances')) {
        // TODO: find out, whether default session was already used
        // -> start with partition directly or reuse the existing default session
        store.set('instances', [
            {
                key: 'test',
                matrixId: '@test:livingutopia.org',
                avatar: null,
                // isLegacyDefaultSession: true,
            },
        ]);
    }

    const instanceList = store.get('instances') as InstanceStoreData[];
    if (!instanceList) {
        console.log('no instance found');
        // TODO: automatically create a new instance
        return;
    }
    const activeInstance = store.get('activeInstance', instanceList[0].key) as string|undefined;
    for (const ins of instanceList) {
        createInstanceView(ins.key, ins.matrixId, ins.avatar, asarPath, window);
    }
    selectInstance(activeInstance);
    ipcMain.emit('instance-update');
}

export function selectInstance(key: string) {
    const ins = instances.find(i => i.key === key);
    if (!ins) {
        console.error(`Instance '${key}' does not exist`);
        return;
    }
    (global.mainWindow as BrowserWindow).setTopBrowserView(ins.view);
    global.currentView = ins.view;
    resize();
}

export function getInstances() {
    return instances;
}