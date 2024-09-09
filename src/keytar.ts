/*
Copyright 2022-2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import type * as Keytar from "keytar"; // Hak dependency type

let keytar: typeof Keytar | undefined;
try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    keytar = require("keytar");
} catch (e) {
    if ((<NodeJS.ErrnoException>e).code === "MODULE_NOT_FOUND") {
        console.log("Keytar isn't installed; secure key storage is disabled.");
    } else {
        console.warn("Keytar unexpected error:", e);
    }
}

export { keytar };
