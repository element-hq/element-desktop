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

import { safeStorage } from "electron";

import type * as Keytar from "keytar";

const KEYTAR_SERVICE = "element.io";
const LEGACY_KEYTAR_SERVICE = "riot.im";

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

export async function migrate(): Promise<void> {
    if (global.store.get("migratedToSafeStorage")) return; // already done

    if (keytar) {
        const credentials = [
            ...(await keytar.findCredentials(LEGACY_KEYTAR_SERVICE)),
            ...(await keytar.findCredentials(KEYTAR_SERVICE)),
        ];
        credentials.forEach((cred) => {
            deletePassword(cred.account);
            setPassword(cred.account, cred.password);
        });
    }

    global.store.set("migratedToSafeStorage", true);
}

/**
 * Get the stored password for the key.
 *
 * @param key The string key name.
 *
 * @returns A promise for the password string.
 */
export async function getPassword(key: string): Promise<string | null> {
    if (safeStorage.isEncryptionAvailable()) {
        const encryptedValue = global.store.get(`safeStorage.${key}`);
        if (typeof encryptedValue === "string") {
            return safeStorage.decryptString(Buffer.from(encryptedValue));
        }
    }
    if (keytar) {
        return (
            (await keytar.getPassword(KEYTAR_SERVICE, key)) ?? (await keytar.getPassword(LEGACY_KEYTAR_SERVICE, key))
        );
    }
    return null;
}

/**
 * Add the password for the key to the keychain.
 *
 * @param key The string key name.
 * @param password The string password.
 *
 * @returns A promise for the set password completion.
 */
export async function setPassword(key: string, password: string): Promise<void> {
    if (safeStorage.isEncryptionAvailable()) {
        const encryptedValue = safeStorage.encryptString(password);
        global.store.set(`safeStorage.${key}`, encryptedValue.toString());
    }
    await keytar?.setPassword(KEYTAR_SERVICE, key, password);
}

/**
 * Delete the stored password for the key.
 *
 * @param key The string key name.
 *
 * @returns A promise for the deletion status. True on success.
 */
export async function deletePassword(key: string): Promise<boolean> {
    if (safeStorage.isEncryptionAvailable()) {
        global.store.delete(`safeStorage.${key}`);
        await keytar?.deletePassword(LEGACY_KEYTAR_SERVICE, key);
        await keytar?.deletePassword(KEYTAR_SERVICE, key);
        return true;
    }
    return false;
}
