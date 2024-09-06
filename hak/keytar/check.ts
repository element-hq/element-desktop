/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import childProcess from "child_process";

import HakEnv from "../../scripts/hak/hakEnv";
import { DependencyInfo } from "../../scripts/hak/dep";

export default async function (hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    const tools = [["python", "--version"]]; // node-gyp uses python for reasons beyond comprehension

    for (const tool of tools) {
        await new Promise<void>((resolve, reject) => {
            const proc = childProcess.spawn(tool[0], tool.slice(1), {
                stdio: ["ignore"],
            });
            proc.on("exit", (code) => {
                if (code !== 0) {
                    reject("Can't find " + tool);
                } else {
                    resolve();
                }
            });
        });
    }
}
