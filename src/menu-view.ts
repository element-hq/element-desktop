import { BrowserView, BrowserWindow, ipcMain } from "electron";
import * as path from 'path';
import { selectInstance, getInstances, createInstance } from "./instances";

let menu: BrowserView;

ipcMain.on('select-instance', (_ev, key) => {
    selectInstance(key);
});

ipcMain.handle('get-instances', () => {
    return getInstances().map(ins => ({
        key: ins.key,
        matrixId: ins.matrixId,
        avatar: ins.avatar,
    }));
});

ipcMain.on('create-instance', () => {
    console.log('create-instance');

    // TODO: find better way to name instances
    // is it possible to rename session partitions to matrixId later once loggedin?
    const key = 'instance'+Math.random();
    createInstance(key);
});

/**
 * let menu know, that something in the list of instances has changed
 */
export function emitInstanceUpdate() {
    menu.webContents.send('instance-update');
}

export function createMenuView(window: BrowserWindow): BrowserView {
    menu = new BrowserView({
        webPreferences: {
            preload: path.normalize(`${__dirname}/menu/preload.js`),
        },
    });
    menu.setBounds({
        x: 0,
        y: 0,
        height: 800,
        width: 50,
    });
    menu.webContents.loadFile('./src/menu/index.html');
    menu.webContents.openDevTools({ mode: 'detach' });
    window.addBrowserView(menu);
    return menu;
}
