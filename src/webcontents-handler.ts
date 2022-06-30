/*
Copyright 2021 New Vector Ltd

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

import {
    clipboard,
    nativeImage,
    Menu,
    MenuItem,
    shell,
    dialog,
    ipcMain,
    NativeImage,
    WebContents,
    ContextMenuParams,
    DownloadItem,
    MenuItemConstructorOptions,
    IpcMainEvent,
} from 'electron';
import url from 'url';
import fs from 'fs';
import request from 'request';
import path from 'path';

import { _t } from './language-helper';

const MAILTO_PREFIX = "mailto:";

const PERMITTED_URL_SCHEMES: string[] = [
    'http:',
    'https:',
    MAILTO_PREFIX,
];

function safeOpenURL(target: string): void {
    // openExternal passes the target to open/start/xdg-open,
    // so put fairly stringent limits on what can be opened
    // (for instance, open /bin/sh does indeed open a terminal
    // with a shell, albeit with no arguments)
    const parsedUrl = url.parse(target);
    if (PERMITTED_URL_SCHEMES.indexOf(parsedUrl.protocol) > -1) {
        // explicitly use the URL re-assembled by the url library,
        // so we know the url parser has understood all the parts
        // of the input string
        const newTarget = url.format(parsedUrl);
        shell.openExternal(newTarget);
    }
}

function onWindowOrNavigate(ev: Event, target: string): void {
    // always prevent the default: if something goes wrong,
    // we don't want to end up opening it in the electron
    // app, as we could end up opening any sort of random
    // url in a window that has node scripting access.
    ev.preventDefault();
    safeOpenURL(target);
}

function writeNativeImage(filePath: string, img: NativeImage): Promise<void> {
    switch (filePath.split('.').pop().toLowerCase()) {
        case "jpg":
        case "jpeg":
            return fs.promises.writeFile(filePath, img.toJPEG(100));
        case "bmp":
            return fs.promises.writeFile(filePath, img.toBitmap());
        case "png":
        default:
            return fs.promises.writeFile(filePath, img.toPNG());
    }
}

function onLinkContextMenu(ev: Event, params: ContextMenuParams, webContents: WebContents): void {
    let url = params.linkURL || params.srcURL;

    if (url.startsWith('vector://vector/webapp')) {
        // Avoid showing a context menu for app icons
        if (params.hasImageContents) return;
        // Rewrite URL so that it can be used outside of the app
        url = "https://app.element.io/" + url.substring(23);
    }

    const popupMenu = new Menu();
    // No point trying to open blob: URLs in an external browser: it ain't gonna work.
    if (!url.startsWith('blob:')) {
        popupMenu.append(new MenuItem({
            label: url,
            click() {
                safeOpenURL(url);
            },
        }));
    }

    if (params.hasImageContents) {
        popupMenu.append(new MenuItem({
            label: _t('Copy image'),
            accelerator: 'c',
            click() {
                webContents.copyImageAt(params.x, params.y);
            },
        }));
    }

    // No point offering to copy a blob: URL either
    if (!url.startsWith('blob:')) {
        // Special-case e-mail URLs to strip the `mailto:` like modern browsers do
        if (url.startsWith(MAILTO_PREFIX)) {
            popupMenu.append(new MenuItem({
                label: _t('Copy email address'),
                accelerator: 'a',
                click() {
                    clipboard.writeText(url.substr(MAILTO_PREFIX.length));
                },
            }));
        } else {
            popupMenu.append(new MenuItem({
                label: params.hasImageContents
                    ? _t('Copy image address')
                    : _t('Copy link address'),
                accelerator: 'a',
                click() {
                    clipboard.writeText(url);
                },
            }));
        }
    }

    // XXX: We cannot easily save a blob from the main process as
    // only the renderer can resolve them so don't give the user an option to.
    if (params.hasImageContents && !url.startsWith('blob:')) {
        popupMenu.append(new MenuItem({
            label: _t('Save image as...'),
            accelerator: 's',
            async click() {
                const targetFileName = params.suggestedFilename || params.altText || "image.png";
                const { filePath } = await dialog.showSaveDialog({
                    defaultPath: targetFileName,
                });

                if (!filePath) return; // user cancelled dialog

                try {
                    if (url.startsWith("data:")) {
                        await writeNativeImage(filePath, nativeImage.createFromDataURL(url));
                    } else {
                        request.get(url).pipe(fs.createWriteStream(filePath));
                    }
                } catch (err) {
                    console.error(err);
                    dialog.showMessageBox({
                        type: "error",
                        title: _t("Failed to save image"),
                        message: _t("The image failed to save"),
                    });
                }
            },
        }));
    }

    // popup() requires an options object even for no options
    popupMenu.popup({});
    ev.preventDefault();
}

function cutCopyPasteSelectContextMenus(params: ContextMenuParams): MenuItemConstructorOptions[] {
    const options: MenuItemConstructorOptions[] = [];

    if (params.misspelledWord) {
        params.dictionarySuggestions.forEach(word => {
            options.push({
                label: word,
                click: (menuItem, browserWindow) => {
                    browserWindow.webContents.replaceMisspelling(word);
                },
            });
        });
        options.push({
            type: 'separator',
        }, {
            label: _t('Add to dictionary'),
            click: (menuItem, browserWindow) => {
                browserWindow.webContents.session.addWordToSpellCheckerDictionary(params.misspelledWord);
            },
        }, {
            type: 'separator',
        });
    }

    options.push({
        role: 'cut',
        label: _t('Cut'),
        accelerator: 't',
        enabled: params.editFlags.canCut,
    }, {
        role: 'copy',
        label: _t('Copy'),
        accelerator: 'c',
        enabled: params.editFlags.canCopy,
    }, {
        role: 'paste',
        label: _t('Paste'),
        accelerator: 'p',
        enabled: params.editFlags.canPaste,
    }, {
        role: 'pasteAndMatchStyle',
        enabled: params.editFlags.canPaste,
    }, {
        role: 'selectAll',
        label: _t("Select All"),
        accelerator: 'a',
        enabled: params.editFlags.canSelectAll,
    });
    return options;
}

function onSelectedContextMenu(ev, params) {
    const items = cutCopyPasteSelectContextMenus(params);
    const popupMenu = Menu.buildFromTemplate(items);

    // popup() requires an options object even for no options
    popupMenu.popup({});
    ev.preventDefault();
}

function onEditableContextMenu(ev: Event, params: ContextMenuParams) {
    const items: MenuItemConstructorOptions[] = [
        { role: 'undo' },
        { role: 'redo', enabled: params.editFlags.canRedo },
        { type: 'separator' },
        ...cutCopyPasteSelectContextMenus(params),
    ];

    const popupMenu = Menu.buildFromTemplate(items);

    // popup() requires an options object even for no options
    popupMenu.popup({});
    ev.preventDefault();
}

let userDownloadIndex = 0;
const userDownloadMap = new Map<number, string>(); // Map from id to path
ipcMain.on('userDownloadAction', function(ev: IpcMainEvent, { id, open = false }) {
    if (open) {
        shell.openPath(userDownloadMap.get(id));
    }
    userDownloadMap.delete(id);
});

export default (webContents: WebContents): void => {
    webContents.on('new-window', onWindowOrNavigate);
    webContents.on('will-navigate', (ev: Event, target: string): void => {
        if (target.startsWith("vector://")) return;
        return onWindowOrNavigate(ev, target);
    });

    webContents.on('context-menu', function(ev: Event, params: ContextMenuParams): void {
        if (params.linkURL || params.srcURL) {
            onLinkContextMenu(ev, params, webContents);
        } else if (params.selectionText) {
            onSelectedContextMenu(ev, params);
        } else if (params.isEditable) {
            onEditableContextMenu(ev, params);
        }
    });

    webContents.session.on('will-download', (event: Event, item: DownloadItem): void => {
        item.once('done', (event, state) => {
            if (state === 'completed') {
                const savePath = item.getSavePath();
                const id = userDownloadIndex++;
                userDownloadMap.set(id, savePath);
                webContents.send('userDownloadCompleted', {
                    id,
                    name: path.basename(savePath),
                });
            }
        });
    });
};
