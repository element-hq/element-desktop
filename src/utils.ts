/*
Copyright 2022-2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import crypto from "crypto";
import fs from "node:fs";
import path from "node:path";

export async function randomArray(size: number): Promise<string> {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, (err, buf) => {
            if (err) {
                reject(err);
            } else {
                resolve(buf.toString("base64").replace(/=+$/g, ""));
            }
        });
    });
}

type JsonValue = null | string | number;
type JsonArray = Array<JsonValue | JsonObject | JsonArray>;
interface JsonObject {
    [key: string]: JsonObject | JsonArray | JsonValue;
}
type Json = JsonArray | JsonObject;

/**
 * Synchronously load a JSON file from the local filesystem.
 * Unlike `require`, will never execute any javascript in a loaded file.
 * @param paths - An array of path segments which will be joined using the system's path delimiter.
 */
export function loadJsonFile<T extends Json>(...paths: string[]): T {
    const file = fs.readFileSync(path.join(...paths), { encoding: "utf-8" });
    return JSON.parse(file);
}
