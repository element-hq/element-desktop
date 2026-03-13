/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import type { Node } from "@vencord/venmic";

/** User's audio source selection from the audio picker. */
export interface AudioSelection {
    type: "none" | "system" | "app";
    node?: Node;
}

/** Result of listing available venmic audio nodes. */
export type VenmicListResult =
    | { ok: true; targets: Node[]; hasPipewirePulse: boolean }
    | { ok: false; isGlibcOutdated: boolean };
