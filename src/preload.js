/*
Copyright 2018, 2019 New Vector Ltd

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

const { ipcRenderer, desktopCapturer } = require('electron');

// expose ipcRenderer to the renderer process
window.ipcRenderer = ipcRenderer;

// This is a fix for screen-sharing in Electron
window.navigator.mediaDevices.getDisplayMedia = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const sources = await desktopCapturer.getSources({
                types: ["screen", "window"],
            });
            const screens = sources.filter((source) => {
                return source.id.startsWith("screen");
            });
            const windows = sources.filter((source) => {
                return source.id.startsWith("window");
            });
            console.log(screens);
            console.log(windows);

            const selectionElem = document.createElement("div");
            selectionElem.classList = "desktop-capturer-selection";
            selectionElem.innerHTML = `
                <div class="desktop-capturer-selection-scroller">
                    <ul class="desktop-capturer-selection-list">
                        ${
                            sources.map(({
                                id,
                                name,
                                thumbnail,
                                displayId,
                                appIcon,
                            }) => `
                                <li class="desktop-capturer-selection-item">
                                    <button class="desktop-capturer-selection-button" data-id="${id}" title="${name}">
                                    <img class="desktop-capturer-selection-thumbnail" src="${
                                        thumbnail.toDataURL()
                                    }" />
                                    <span class="desktop-capturer-selection-name">${name}</span>
                                    </button>
                                </li>
                            `).join("")
                        }
                    </ul>
                </div>

                <style>
                    .desktop-capturer-selection {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100vh;
                        background: rgba(30,30,30,.75);
                        color: #fff;
                        z-index: 10000000;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .desktop-capturer-selection-scroller {
                        width: 100%;
                        max-height: 100vh;
                        overflow-y: auto;
                    }
                    .desktop-capturer-selection-list {
                        max-width: calc(100% - 100px);
                        margin: 50px;
                        padding: 0;
                        display: flex;
                        flex-wrap: wrap;
                        list-style: none;
                        overflow: hidden;
                        justify-content: center;
                    }
                    .desktop-capturer-selection-item {
                        display: flex;
                        margin: 4px;
                    }
                    .desktop-capturer-selection-button {
                        display: flex;
                        flex-direction: column;
                        align-items: stretch;
                        width: 145px;
                        margin: 0;
                        border: 0;
                        border-radius: 4px;
                        padding: 4px;
                        background: #20262b;
                        color: #ffffff;
                        text-align: left;
                        transition: background-color .15s, box-shadow .15s;
                    }
                    .desktop-capturer-selection-button:hover,
                    .desktop-capturer-selection-button:focus {
                        background: #363c43;
                    }
                    .desktop-capturer-selection-thumbnail {
                        width: 100%;
                        height: 81px;
                        object-fit: cover;
                    }
                    .desktop-capturer-selection-name {
                        margin: 6px 0 6px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                </style>
            `;
            document.body.appendChild(selectionElem);

            document.querySelectorAll(".desktop-capturer-selection-button").forEach((button) => {
                button.addEventListener("click", async () => {
                    console.log("Click");
                    try {
                        const id = button.getAttribute("data-id");
                        const source = sources.find((source) => source.id === id);
                        if (! source) {
                            throw new Error(`Source with id ${id} does not exist`);
                        }

                        const stream = await window.navigator.mediaDevices.getUserMedia({
                            audio: false,
                            video: {
                                mandatory: {
                                    chromeMediaSource: "desktop",
                                    chromeMediaSourceId: source.id,
                                },
                            },
                        });
                        resolve(stream);

                        selectionElem.remove();
                    } catch (err) {
                        console.error("Error selecting desktop capture source:", err);
                        reject(err);
                    }
                });
            });
        } catch (err) {
            console.error("Error displaying desktop capture sources:", err);
            reject(err);
        }
    });
};
