/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import path from "node:path";

import { loadJsonFile } from "./utils.js";

export interface BuildConfig {
    appId: string;
    protocol: string;
}

export function readBuildConfig(): BuildConfig {
    return loadJsonFile(path.join(__dirname, "build-config.json")) as unknown as BuildConfig;
}
