/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import path from "node:path";
import os from "node:os";
import fsProm from "node:fs/promises";

import type HakEnv from "./hakEnv.js";
import { type DependencyInfo } from "./dep.js";

export default async function link(hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    const linkFolder=path.join(hakEnv.dotHakDir, "links");
    await hakEnv.spawn("yarn", ["link", "--link-folder", linkFolder], {
        cwd: moduleInfo.moduleOutDir,
    });

    await hakEnv.spawn("yarn", ["link", "--link-folder", linkFolder, moduleInfo.name], {
        cwd: hakEnv.projectRoot,
    });
}
