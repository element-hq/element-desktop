/*
Copyright 2024 New Vector Ltd.
Copyright 2020, 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import fs from "node:fs/promises";
import path from "node:path";

import type HakEnv from "../../scripts/hak/hakEnv.js";
import type { DependencyInfo } from "../../scripts/hak/dep.js";

export default async function (hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    const env = hakEnv.makeGypEnv();

    if (!hakEnv.isHost()) {
        env.CARGO_BUILD_TARGET = hakEnv.getTargetId();
    }

    console.log("Running yarn install");

    // Workaround for yarn berry being unhappy to run here without a `yarn.lock` file
    const handle = await fs.open(path.join(moduleInfo.moduleBuildDir, "yarn.lock"), "a");
    await handle.close();

    await hakEnv.spawn("yarn", ["install"], {
        cwd: moduleInfo.moduleBuildDir,
        env,
        shell: true,
    });

    const buildTarget = hakEnv.wantsStaticSqlCipher() ? "build-bundled" : "build";

    console.log("Running yarn build");
    await hakEnv.spawn("yarn", ["run", buildTarget], {
        cwd: moduleInfo.moduleBuildDir,
        env,
        shell: true,
    });
}
