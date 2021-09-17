/*
Copyright 2016 OpenMarket Ltd

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

import { app, shell, Menu, MenuItem, MenuItemConstructorOptions } from 'electron';
import { _t } from './language-helper';

const isMac = process.platform === 'darwin';

export function buildMenuTemplate(): Menu {
    // Menu template from http://electron.atom.io/docs/api/menu/, edited
    const template: Array<(MenuItemConstructorOptions) | (MenuItem)> = [
        {
            label: _t('Edit'),
            accelerator: 'e',
            submenu: [
                {
                    role: 'undo',
                    label: _t('Undo'),
                },
                {
                    role: 'redo',
                    label: _t('Redo'),
                },
                { type: 'separator' },
                {
                    role: 'cut',
                    label: _t('Cut'),
                },
                {
                    role: 'copy',
                    label: _t('Copy'),
                },
                {
                    role: 'paste',
                    label: _t('Paste'),
                },
                {
                    role: 'pasteAndMatchStyle',
                    label: _t('Paste and Match Style'),
                },
                {
                    role: 'delete',
                    label: _t('Delete'),
                },
                {
                    role: 'selectAll',
                    label: _t('Select All'),
                },
            ],
        },
        {
            label: _t('View'),
            accelerator: 'V',
            submenu: [
                { type: 'separator' },
                {
                    role: 'resetZoom',
                    accelerator: 'CmdOrCtrl+Num0',
                    visible: false,
                },
                {
                    role: 'zoomIn',
                    accelerator: 'CmdOrCtrl+NumAdd',
                    visible: false,
                },
                {
                    role: 'zoomOut',
                    accelerator: 'CmdOrCtrl+NumSub',
                    visible: false,
                },
                {
                    role: 'resetZoom',
                    label: _t('Actual Size'),
                },
                {
                    role: 'zoomIn',
                    label: _t('Zoom In'),
                },
                {
                    role: 'zoomOut',
                    label: _t('Zoom Out'),
                },
                { type: 'separator' },
                // in macOS the Preferences menu item goes in the first menu
                ...(!isMac ? [{
                    label: _t('Preferences'),
                    click() { global.mainWindow.webContents.send('preferences'); },
                }] : []),
                {
                    role: 'togglefullscreen',
                    label: _t('Toggle Full Screen'),
                },
                {
                    role: 'toggleDevTools',
                    label: _t('Toggle Developer Tools'),
                },
            ],
        },
        {
            label: _t('Window'),
            accelerator: 'w',
            role: 'window',
            submenu: [
                {
                    role: 'minimize',
                    label: _t('Minimize'),
                },
                {
                    role: 'close',
                    label: _t('Close'),
                },
            ],
        },
        {
            label: _t('Help'),
            accelerator: 'h',
            role: 'help',
            submenu: [
                {
                    label: _t('Element Help'),
                    click() { shell.openExternal('https://element.io/help'); },
                },
            ],
        },
    ];

    // macOS has specific menu conventions...
    if (isMac) {
        template.unshift({
            // first macOS menu is the name of the app
            role: 'appMenu',
            label: app.name,
            submenu: [
                {
                    role: 'about',
                    label: _t('About') + ' ' + app.name,
                },
                { type: 'separator' },
                {
                    label: _t('Preferences') + '…',
                    accelerator: 'Command+,', // Mac-only accelerator
                    click() { global.mainWindow.webContents.send('preferences'); },
                },
                { type: 'separator' },
                {
                    role: 'services',
                    label: _t('Services'),
                    submenu: [],
                },
                { type: 'separator' },
                {
                    role: 'hide',
                    label: _t('Hide'),
                },
                {
                    role: 'hideOthers',
                    label: _t('Hide Others'),
                },
                {
                    role: 'unhide',
                    label: _t('Unhide'),
                },
                { type: 'separator' },
                {
                    role: 'quit',
                    label: _t('Quit'),
                },
            ],
        });
        // Edit menu.
        // This has a 'speech' section on macOS
        (template[1].submenu as MenuItemConstructorOptions[]).push(
            { type: 'separator' },
            {
                label: _t('Speech'),
                submenu: [
                    {
                        role: 'startSpeaking',
                        label: _t('Start Speaking'),
                    },
                    {
                        role: 'stopSpeaking',
                        label: _t('Stop Speaking'),
                    },
                ],
            });

        // Window menu.
        // This also has specific functionality on macOS
        template[3].submenu = [
            {
                label: _t('Close'),
                accelerator: 'CmdOrCtrl+W',
                role: 'close',
            },
            {
                label: _t('Minimize'),
                accelerator: 'CmdOrCtrl+M',
                role: 'minimize',
            },
            {
                label: _t('Zoom'),
                role: 'zoom',
            },
            {
                type: 'separator',
            },
            {
                label: _t('Bring All to Front'),
                role: 'front',
            },
        ];
    } else {
        template.unshift({
            label: _t('File'),
            accelerator: 'f',
            submenu: [
                // For some reason, 'about' does not seem to work on windows.
                /*{
                    role: 'about',
                    label: _t('About'),
                },*/
                {
                    role: 'quit',
                    label: _t('Quit'),
                },
            ],
        });
    }

    return Menu.buildFromTemplate(template);
}
