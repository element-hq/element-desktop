/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import path from "path";
import childProcess from "child_process";

import HakEnv from "../../scripts/hak/hakEnv";
import { DependencyInfo } from "../../scripts/hak/dep";

export default async function buildKeytar(hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    const env = hakEnv.makeGypEnv();

    console.log("Running yarn with env", env);
    await new Promise<void>((resolve, reject) => {
        const proc = childProcess.spawn(
            path.join(moduleInfo.nodeModuleBinDir, "node-gyp" + (hakEnv.isWin() ? ".cmd" : "")),
            ["rebuild", "--arch", hakEnv.getTargetArch()],
            {
                cwd: moduleInfo.moduleBuildDir,
                env,
                stdio: "inherit",
                // We need shell mode on Windows to be able to launch `.cmd` executables
                // See https://nodejs.org/en/blog/vulnerability/april-2024-security-releases-2
                shell: hakEnv.isWin(),
            },
        );
        proc.on("exit", (code) => {
            code ? reject(code) : resolve();
        });
    });
}
