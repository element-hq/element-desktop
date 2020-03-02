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

const {app} = require('electron');

const processUrl = (url) => {
    if (!global.mainWindow) return;
    console.log("Handling link: ", url);
    global.mainWindow.loadURL(url.replace("riot://", "vector://"));
};

module.exports = () => {
    // get all args except `hidden` as it'd mean the app would not get focused
    const args = process.argv.slice(1).filter(arg => arg !== "--hidden" && arg !== "-hidden");
    if (app.isPackaged) {
        app.setAsDefaultProtocolClient('riot', process.execPath, args);
    } else {
        // special handler for running without being packaged, e.g `electron .` by passing our app path to electron
        // XXX: passing args to protocol handlers only works on Windows,
        // so unpackaged (electron .) deep-linking won't work on Mac/Linux
        app.setAsDefaultProtocolClient('riot', process.execPath, [app.getAppPath(), ...args]);
    }

    // Protocol handler for macos
    app.on('open-url', function(ev, url) {
        ev.preventDefault();
        processUrl(url);
    });

    // Protocol handler for win32/Linux
    if (process.platform !== 'darwin') {
        app.on('second-instance', (ev, commandLine) => {
            const url = commandLine[commandLine.length - 1];
            if (!url.startsWith("riot://")) return;
            processUrl(url);
        });
    }
};


