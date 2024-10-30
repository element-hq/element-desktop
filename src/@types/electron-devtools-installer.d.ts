/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

// import "electron-devtools-installer";

declare module "electron-devtools-installer" {
    interface ExtensionReference {
        id: string;
        electron: string;
    }

    export const REACT_DEVELOPER_TOOLS: ExtensionReference;
    export default function install(extension: ExtensionReference): Promise<string>;
}
