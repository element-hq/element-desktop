/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import type HakEnv from "../../scripts/hak/hakEnv.js";
import type { DependencyInfo } from "../../scripts/hak/dep.js";

export default async function (hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    // node-gyp uses python for reasons beyond comprehension
    await hakEnv.checkTools([["python", "--version"]]);
}
