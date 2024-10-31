/*
Copyright 2022-2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

declare module "@mapbox/node-pre-gyp/lib/util/versioning" {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    export function get_runtime_abi(runtime: string, version: string): string;
}
