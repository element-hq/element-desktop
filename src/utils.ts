/*
Copyright 2022 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
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
