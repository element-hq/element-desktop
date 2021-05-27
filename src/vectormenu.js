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

const { app, shell, Menu } = require('electron');
const { _t } = require('./language-helper');

function buildMenuTemplate() {
    // Menu template from http://electron.atom.io/docs/api/menu/, edited
    const template = [
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
                    role: 'pasteandmatchstyle',
                    label: _t('Paste and Match Style'),
                },
                {
                    role: 'delete',
                    label: _t('Delete'),
                },
                {
                    role: 'selectall',
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
                    role: 'resetzoom',
                    label: _t('Actual Size'),
                },
                {
                    role: 'zoomin',
                    accelerator: 'CommandOrControl+=',
                    label: _t('Zoom In'),
                },
                {
                    role: 'zoomout',
                    label: _t('Zoom Out'),
                },
                { type: 'separator' },
                {
                    label: _t('Preferences'),
                    accelerator: 'Command+,', // Mac-only accelerator
                    click() { global.mainWindow.webContents.send('preferences'); },
                },
                {
                    role: 'togglefullscreen',
                    label: _t('Toggle Full Screen'),
                },
                {
                    role: 'toggledevtools',
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
    if (process.platform === 'darwin') {
        template.unshift({
            // first macOS menu is the name of the app
            role: 'appMenu',
            label: app.name,
            submenu: [
                {
                    role: 'about',
                    label: _t('About'),
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
                    role: 'hideothers',
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
        template[1].submenu.push(
            { type: 'separator' },
            {
                label: _t('Speech'),
                submenu: [
                    {
                        role: 'startspeaking',
                        label: _t('Start Speaking'),
                    },
                    {
                        role: 'stopspeaking',
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

module.exports = buildMenuTemplate;

