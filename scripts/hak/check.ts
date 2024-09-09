/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import { DependencyInfo } from "./dep";
import HakEnv from "./hakEnv";

export default async function check(hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    if (moduleInfo.scripts.check) {
        await moduleInfo.scripts.check(hakEnv, moduleInfo);
    }
}
