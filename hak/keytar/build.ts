/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import path from "node:path";

import type HakEnv from "../../scripts/hak/hakEnv.js";
import type { DependencyInfo } from "../../scripts/hak/dep.js";

export default async function buildKeytar(hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    const env = hakEnv.makeGypEnv();

    console.log("Running yarn with env", env);
    await hakEnv.spawn(
        path.join(moduleInfo.nodeModuleBinDir, "node-gyp"),
        ["rebuild", "--arch", hakEnv.getTargetArch()],
        {
            cwd: moduleInfo.moduleBuildDir,
            env,
        },
    );
}
