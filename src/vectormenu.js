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

const {app, shell, Menu} = require('electron');
const { _td } = require('./language-helper');

function buildMenuTemplate() {
    // Menu template from http://electron.atom.io/docs/api/menu/, edited
    const template = [
        {
            label: _td('Edit'),
            accelerator: 'e',
            submenu: [
                {
                    role: 'undo',
                    label: _td('Undo'),
                },
                {
                    role: 'redo',
                    label: _td('Redo'),
                },
                { type: 'separator' },
                {
                    role: 'cut',
                    label: _td('Cut'),
                },
                {
                    role: 'copy',
                    label: _td('Copy'),
                },
                {
                    role: 'paste',
                    label: _td('Paste'),
                },
                {
                    role: 'pasteandmatchstyle',
                    label: _td('Paste and Match Style'),
                },
                {
                    role: 'delete',
                    label: _td('Delete'),
                },
                {
                    role: 'selectall',
                    label: _td('Select All'),
                },
            ],
        },
        {
            label: _td('View'),
            accelerator: 'V',
            submenu: [
                { type: 'separator' },
                {
                    role: 'resetzoom',
                    label: _td('Actual Size'),
                },
                {
                    role: 'zoomin',
                    accelerator: 'CommandOrControl+=',
                    label: _td('Zoom In'),
                },
                {
                    role: 'zoomout',
                    label: _td('Zoom Out'),
                },
                { type: 'separator' },
                {
                    label: _td('Preferences'),
                    accelerator: 'Command+,', // Mac-only accelerator
                    click() { global.mainWindow.webContents.send('preferences'); },
                },
                {
                    role: 'togglefullscreen',
                    label: _td('Toggle Full Screen'),
                },
                {
                    role: 'toggledevtools',
                    label: _td('Toggle Developer Tools'),
                },
            ],
        },
        {
            label: _td('Window'),
            accelerator: 'w',
            role: 'window',
            submenu: [
                {
                    role: 'minimize',
                    label: _td('Minimize'),
                },
                {
                    role: 'close',
                    label: _td('Close'),
                },
            ],
        },
        {
            label: _td('Help'),
            accelerator: 'h',
            role: 'help',
            submenu: [
                {
                    label: _td('Element Help'),
                    click() { shell.openExternal('https://element.io/help'); },
                },
            ],
        },
    ];

    // macOS has specific menu conventions...
    if (process.platform === 'darwin') {
        template.unshift({
            // first macOS menu is the name of the app
            label: app.name,
            submenu: [
                {
                    role: 'about',
                    label: _td('About'),
                },
                { type: 'separator' },
                {
                    role: 'services',
                    label: _td('Services'),
                    submenu: [],
                },
                { type: 'separator' },
                {
                    role: 'hide',
                    label: _td('Hide'),
                },
                {
                    role: 'hideothers',
                    label: _td('Hide Others'),
                },
                {
                    role: 'unhide',
                    label: _td('Unhide'),
                },
                { type: 'separator' },
                {
                    role: 'quit',
                    label: _td('Quit'),
                },
            ],
        });
        // Edit menu.
        // This has a 'speech' section on macOS
        template[1].submenu.push(
            { type: 'separator' },
            {
                label: _td('Speech'),
                submenu: [
                    {
                        role: 'startspeaking',
                        label: _td('Start Speaking'),
                    },
                    {
                        role: 'stopspeaking',
                        label: _td('Stop Speaking'),
                    },
                ],
            });

        // Window menu.
        // This also has specific functionality on macOS
        template[3].submenu = [
            {
                label: _td('Close'),
                accelerator: 'CmdOrCtrl+W',
                role: 'close',
            },
            {
                label: _td('Minimize'),
                accelerator: 'CmdOrCtrl+M',
                role: 'minimize',
            },
            {
                label: _td('Zoom'),
                role: 'zoom',
            },
            {
                type: 'separator',
            },
            {
                label: _td('Bring All to Front'),
                role: 'front',
            },
        ];
    } else {
        template.unshift({
            label: _td('File'),
            accelerator: 'f',
            submenu: [
                // For some reason, 'about' does not seem to work on windows.
                /*{
                    role: 'about',
                    label: _td('About'),
                },*/
                {
                    role: 'quit',
                    label: _td('Quit'),
                },
            ],
        });
    }

    return Menu.buildFromTemplate(template);
}

module.exports = buildMenuTemplate;

