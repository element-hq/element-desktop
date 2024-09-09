/*
Copyright 2024 New Vector Ltd.
Copyright 2020, 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import childProcess from "child_process";

import HakEnv from "../../scripts/hak/hakEnv";
import { DependencyInfo } from "../../scripts/hak/dep";

export default async function (hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    const env = hakEnv.makeGypEnv();

    if (!hakEnv.isHost()) {
        env.CARGO_BUILD_TARGET = hakEnv.getTargetId();
    }

    console.log("Running yarn install");
    await new Promise<void>((resolve, reject) => {
        const proc = childProcess.spawn("yarn" + (hakEnv.isWin() ? ".cmd" : ""), ["install"], {
            cwd: moduleInfo.moduleBuildDir,
            env,
            shell: true,
            stdio: "inherit",
        });
        proc.on("exit", (code) => {
            code ? reject(code) : resolve();
        });
    });

    const buildTarget = hakEnv.wantsStaticSqlCipher() ? "build-bundled" : "build";

    console.log("Running yarn build");
    await new Promise<void>((resolve, reject) => {
        const proc = childProcess.spawn("yarn" + (hakEnv.isWin() ? ".cmd" : ""), ["run", buildTarget], {
            cwd: moduleInfo.moduleBuildDir,
            env,
            shell: true,
            stdio: "inherit",
        });
        proc.on("exit", (code) => {
            code ? reject(code) : resolve();
        });
    });
}
