/*
Copyright 2023 New Vector Ltd

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

import { BrowserWindow } from "electron";

export function setupMacosTitleBar(window: BrowserWindow): void {
    if (process.platform !== "darwin") return;

    let cssKey: string | undefined;

    async function applyStyling(): Promise<void> {
        cssKey = await window.webContents.insertCSS(`
            /* Create margin of space for the traffic light buttons */
            .mx_UserMenu {
                margin-top: 32px !important;
            }
            /* Maintain alignment of the toggle space panel button */
            .mx_SpacePanel_toggleCollapse {
                /* 19px original top value, 32px margin-top above, 12px original margin-top value */
                top: calc(19px + 32px - 12px) !important;
            }
            /* Prevent the media lightbox sender info from clipping into the traffic light buttons */
            .mx_ImageView_info_wrapper {
                margin-top: 32px;
            }
            
            /* Mark the splash screen as a drag handle */
            .mx_MatrixChat_splash {
                -webkit-app-region: drag;
            }
            /* Exclude the splash buttons from being drag handles */
            .mx_MatrixChat_splashButtons {
                -webkit-app-region: no-drag;
            }
            
            /* Mark the background as a drag handle */
            .mx_AuthPage {
                -webkit-app-region: drag;
            }
            /* Exclude the main content elements from being drag handles */
            .mx_AuthPage .mx_AuthPage_modalBlur,
            .mx_AuthPage .mx_AuthFooter > * {
                -webkit-app-region: no-drag;
            }
            
            /* Mark the header as a drag handle */
            .mx_LeftPanel .mx_LeftPanel_filterContainer {
                -webkit-app-region: drag;
            }
            /* Exclude header interactive elements from being drag handles */
            .mx_LeftPanel .mx_LeftPanel_filterContainer .mx_AccessibleButton {
                -webkit-app-region: no-drag;
            }
        
            /* Mark the home page background as a drag handle */
            .mx_HomePage {
                -webkit-app-region: drag;
            }
            /* Exclude interactive elements from being drag handles */
            .mx_HomePage .mx_HomePage_body,
            .mx_HomePage .mx_HomePage_default_wrapper > * {
                -webkit-app-region: no-drag;
            }
            
            /* Mark the header as a drag handle */
            .mx_LegacyRoomHeader,
            .mx_RoomHeader {
                -webkit-app-region: drag;
                -webkit-user-select: none;
            }
            /* Exclude header interactive elements from being drag handles */
            .mx_RoomHeader .mx_DecoratedRoomAvatar,
            .mx_RoomHeader_name,
            .mx_LegacyRoomHeader .mx_LegacyRoomHeader_avatar,
            .mx_LegacyRoomHeader .mx_E2EIcon,
            .mx_LegacyRoomHeader .mx_RoomTopic,
            .mx_LegacyRoomHeader .mx_AccessibleButton {
                -webkit-app-region: no-drag;
            }
            
            /* Mark the background as a drag handle */
            .mx_RoomView_wrapper {
                -webkit-app-region: drag;
            }
            /* Exclude content elements from being drag handles */
            .mx_SpaceRoomView_landing > *,
            .mx_RoomPreviewBar,
            .mx_RoomView_body,
            .mx_AutoHideScrollbar,
            .mx_RightPanel_ResizeWrapper,
            .mx_RoomPreviewCard {
                -webkit-app-region: no-drag;
            }
        `);
    }

    window.on("enter-full-screen", () => {
        if (cssKey !== undefined) {
            window.webContents.removeInsertedCSS(cssKey);
        }
    });
    window.on("leave-full-screen", () => {
        applyStyling();
    });
    window.webContents.on("did-finish-load", () => {
        if (!window.isFullScreen()) {
            applyStyling();
        }
    });
}
