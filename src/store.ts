/*
Copyright 2022-2025 New Vector Ltd

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

import ElectronStore from "electron-store";
import keytar from "keytar-forked";
import { app, safeStorage } from "electron";

/**
 * Legacy keytar service names for storing secrets.
 */
const KEYTAR_SERVICE = "element.io";
const LEGACY_KEYTAR_SERVICE = "riot.im";

/**
 * JSON-backed store for settings which need to be accessible by the main process.
 * Secrets are stored within the `safeStorage` object, encrypted with safeStorage.
 * Any secrets operations are blocked on Electron app ready emit, and keytar migration if still needed.
 */
export class Store extends ElectronStore<{
    warnBeforeExit: boolean;
    minimizeToTray: boolean;
    spellCheckerEnabled: boolean;
    autoHideMenuBar: boolean;
    locale?: string | string[];
    disableHardwareAcceleration: boolean;
    safeStorage?: Record<string, string>;
}> {
    public constructor() {
        super({
            name: "electron-config",
            clearInvalidConfig: false,
            schema: {
                warnBeforeExit: {
                    type: "boolean",
                    default: true,
                },
                minimizeToTray: {
                    type: "boolean",
                    default: true,
                },
                spellCheckerEnabled: {
                    type: "boolean",
                    default: true,
                },
                autoHideMenuBar: {
                    type: "boolean",
                    default: true,
                },
                locale: {
                    anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
                },
                disableHardwareAcceleration: {
                    type: "boolean",
                    default: false,
                },
                safeStorage: {
                    type: "object",
                },
            },
        });
    }

    private whenSafeStorageReadyPromise?: Promise<void>;
    private safeStorageReady(): Promise<void> {
        if (!this.whenSafeStorageReadyPromise) {
            this.whenSafeStorageReadyPromise = app.whenReady().then(() => this.migrate());
        }
        return this.whenSafeStorageReadyPromise;
    }

    private getSecretStorageKey = (key: string) => `safeStorage.${key}` as const;

    /**
     * Migrates keytar data to safeStorage,
     * deletes data from legacy keytar but keeps it in the new keytar for downgrade compatibility.
     * @throws if safeStorage is not available.
     */
    public async migrate(): Promise<void> {
        console.log("Store migration: started");
        if (this.has("safeStorage")) return;
        if (!safeStorage.isEncryptionAvailable()) {
            console.log("Store migration: safeStorage is not available");
            throw new Error("safeStorage is not available");
        }

        const credentials = [
            ...(await keytar.findCredentials(LEGACY_KEYTAR_SERVICE)),
            ...(await keytar.findCredentials(KEYTAR_SERVICE)),
        ];
        console.log("Store migration:", credentials);
        for (const cred of credentials) {
            await this.deleteSecret(cred.account); // delete from keytar & keytar legacy
            await this.setSecret(cred.account, cred.password); // write to safeStorage & keytar for downgrade compatibility
        }
    }

    /**
     * Get the stored secret for the key.
     * We read from safeStorage if available, falling back to keytar & keytar legacy.
     *
     * @param key The string key name.
     *
     * @returns A promise for the secret string.
     */
    public async getSecret(key: string): Promise<string | null> {
        await this.safeStorageReady();
        if (!safeStorage.isEncryptionAvailable()) {
            return (
                (await keytar.getPassword(KEYTAR_SERVICE, key)) ??
                (await keytar.getPassword(LEGACY_KEYTAR_SERVICE, key))
            );
        }

        const encryptedValue = this.get(this.getSecretStorageKey(key));
        if (typeof encryptedValue === "string") {
            return safeStorage.decryptString(Buffer.from(encryptedValue, "base64"));
        }
        return null;
    }

    /**
     * Add the secret for the key to the keychain.
     * We write to both safeStorage & keytar to support downgrading the application.
     *
     * @param key The string key name.
     * @param secret The string password.
     * @throws if safeStorage is not available.
     *
     * @returns A promise for the set password completion.
     */
    public async setSecret(key: string, secret: string): Promise<void> {
        await this.safeStorageReady();
        if (!safeStorage.isEncryptionAvailable()) {
            throw new Error("safeStorage is not available");
        }

        const encryptedValue = safeStorage.encryptString(secret);
        this.set(this.getSecretStorageKey(key), encryptedValue.toString("base64"));
        await keytar.setPassword(KEYTAR_SERVICE, key, secret);
    }

    /**
     * Delete the stored password for the key.
     * Removes from safeStorage, keytar & keytar legacy.
     *
     * @param key The string key name.
     */
    public async deleteSecret(key: string): Promise<void> {
        await this.safeStorageReady();

        await keytar.deletePassword(LEGACY_KEYTAR_SERVICE, key);
        await keytar.deletePassword(KEYTAR_SERVICE, key);
        if (safeStorage.isEncryptionAvailable()) {
            this.delete(this.getSecretStorageKey(key));
        }
    }
}
