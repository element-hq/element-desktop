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
import { app, safeStorage, dialog, type SafeStorage } from "electron";

import { _t } from "./language-helper.js";

/**
 * Legacy keytar service names for storing secrets.
 */
const KEYTAR_SERVICE = "element.io";
const LEGACY_KEYTAR_SERVICE = "riot.im";

type SafeStorageBackend = ReturnType<SafeStorage["getSelectedStorageBackend"]>;

/**
 * Map of safeStorage backends to their command line arguments.
 * kwallet6 cannot be specified via command line
 * https://www.electronjs.org/docs/latest/api/safe-storage#safestoragegetselectedstoragebackend-linux
 */
const safeStorageBackendMap: Omit<Record<SafeStorageBackend, string>, "unknown" | "kwallet6"> = {
    basic_text: "basic",
    gnome_libsecret: "gnome-libsecret",
    kwallet: "kwallet",
    kwallet5: "kwallet5",
};

/**
 * JSON-backed store for settings which need to be accessible by the main process.
 * Secrets are stored within the `safeStorage` object, encrypted with safeStorage.
 * Any secrets operations are blocked on Electron app ready emit, and keytar migration if still needed.
 */
class Store extends ElectronStore<{
    warnBeforeExit: boolean;
    minimizeToTray: boolean;
    spellCheckerEnabled: boolean;
    autoHideMenuBar: boolean;
    locale?: string | string[];
    disableHardwareAcceleration: boolean;
    safeStorage?: Record<string, string>;
    // Only known for Linux - the safeStorage backend used for the safeStorage data as written
    safeStorageBackend?: SafeStorageBackend;
    // Only valid for Linux - whether to override the safeStorage backend via commandLine
    safeStorageBackendOverride?: boolean;
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
                safeStorageBackend: {
                    type: "string",
                },
                safeStorageBackendOverride: {
                    type: "boolean",
                },
            },
        });
    }

    /**
     * Prepare the store, does not prepare safeStorage, which needs to be done after the app is ready.
     * Must be executed in the first tick of the event loop so that it can call Electron APIs before ready state.
     */
    public prepare(): void {
        if (process.platform === "linux") {
            if (this.get("safeStorageBackendOverride")) {
                const backend = this.get("safeStorageBackend")!;
                if (backend in safeStorageBackendMap) {
                    app.commandLine.appendSwitch(
                        "password-store",
                        safeStorageBackendMap[backend as keyof typeof safeStorageBackendMap],
                    );
                } else {
                    // This case should never happen, but could due to a downgrade or a modified store.
                    dialog.showErrorBox(_t("store|error|title"), _t("store|error|unsupported_backend_override"));
                    throw new Error("safeStorage backend override is not supported");
                }
            }
        }
    }

    private safeStorageReadyPromise?: Promise<unknown>;
    public async safeStorageReady(): Promise<void> {
        if (!this.safeStorageReadyPromise) {
            this.safeStorageReadyPromise = this.prepareSafeStorage();
        }
        await this.safeStorageReadyPromise;
    }

    private getSecretStorageKey = (key: string) => `safeStorage.${key}` as const;

    private async prepareSafeStorage(): Promise<void> {
        await app.whenReady();

        if (process.platform === "linux") {
            // Linux safeStorage support is hellish, the support varies on the Desktop Environment used rather than the store itself.
            // https://github.com/electron/electron/issues/39789 https://github.com/microsoft/vscode/issues/185212
            let safeStorageBackend = this.get("safeStorageBackend");
            const selectedSafeStorageBackend = safeStorage.getSelectedStorageBackend();

            if (selectedSafeStorageBackend === "unknown") {
                // This should never happen but good to be safe
                dialog.showErrorBox(_t("store|error|title"), _t("store|error|unknown_backend_override"));
                throw new Error("safeStorage backend unknown");
            }

            if (!safeStorageBackend) {
                if (selectedSafeStorageBackend === "basic_text") {
                    // Ask the user if they want to use plain text encryption
                    // TODO should we only do this if they have existing data
                    const { response } = await dialog.showMessageBox({
                        // TODO
                        title: "Error 1",
                        message: "Message",
                        // detail: _t(""),
                        type: "question",
                        buttons: [_t("common|no"), _t("common|yes")],
                        defaultId: 0,
                        cancelId: 0,
                    });
                    if (response === 0) {
                        throw new Error("safeStorage backend basic_text and user rejected it");
                    }
                }

                // Store the backend used for the safeStorage data so we can detect if it changes
                this.set("safeStorageBackend", selectedSafeStorageBackend);
                safeStorageBackend = selectedSafeStorageBackend;
            } else if (safeStorageBackend !== selectedSafeStorageBackend) {
                console.warn(`safeStorage backend changed from ${safeStorageBackend} to ${selectedSafeStorageBackend}`);

                if (safeStorageBackend === "basic_text") {
                    console.info(`Migrating safeStorage from basic_text to ${selectedSafeStorageBackend}`);
                    const data = this.get("safeStorage");
                    if (data) {
                        for (const key in data) {
                            const plaintext = data[key];
                            await this.setSecretSafeStorage(key, plaintext);
                        }
                    }
                } else if (safeStorageBackend in safeStorageBackendMap) {
                    // Warn the user that the backend has changed and ask if they wish to use the old one
                    const { response } = await dialog.showMessageBox({
                        // TODO
                        title: "Error 2",
                        message: "Message",
                        // detail: _t(""),
                        type: "question",
                        buttons: [_t("common|no"), _t("common|yes")],
                        defaultId: 0,
                        cancelId: 0,
                    });
                    if (response === 0) {
                        throw new Error("safeStorage backend changed and user rejected mitigation");
                    }
                    this.set("safeStorageBackendOverride", true);
                    app.relaunch();
                } else {
                    // Warn the user that the backend has changed and tell them that we cannot migrate
                    // dialog.showErrorBox(_t(""), _t("")); TODO
                    throw new Error("safeStorage backend changed and cannot migrate");
                }
            }

            if (safeStorageBackend === "basic_text" && selectedSafeStorageBackend === safeStorageBackend) {
                // TODO verify if this even works, the docstring makes it sound ephemeral!
                safeStorage.setUsePlainTextEncryption(true);
            }
        }

        if (!safeStorage.isEncryptionAvailable()) {
            console.error("Store migration: safeStorage is not available");
            throw new Error(`safeStorage is not available`);
            // TODO fatal error
        }

        await this.migrateSecrets();
    }

    /**
     * Migrates keytar data to safeStorage,
     * deletes data from legacy keytar but keeps it in the new keytar for downgrade compatibility.
     * @throws if safeStorage is not available. TODO
     */
    private async migrateSecrets(): Promise<void> {
        if (this.has("safeStorage")) return; // already migrated
        console.info("Store migration: started");

        if (process.platform === "linux" && safeStorage.getSelectedStorageBackend() === "basic_text") {
            console.warn("Store migration: safeStorage is using basic text encryption");
        }

        try {
            const credentials = [
                ...(await keytar.findCredentials(LEGACY_KEYTAR_SERVICE)),
                ...(await keytar.findCredentials(KEYTAR_SERVICE)),
            ];
            for (const cred of credentials) {
                console.info("Store migration: writing", cred);
                await this.setSecretSafeStorage(cred.account, cred.password);
                console.info("Store migration: deleting", cred);
                await this.deleteSecretKeytar(LEGACY_KEYTAR_SERVICE, cred.account);
            }
            console.info(`Store migration done: found ${credentials.length} credentials`);
        } catch (e) {
            console.error("Store migration failed:", e);
            throw e;
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

        await this.setSecretSafeStorage(key, secret);
        await keytar.setPassword(KEYTAR_SERVICE, key, secret);
    }

    private async setSecretSafeStorage(key: string, secret: string): Promise<void> {
        const encryptedValue = safeStorage.encryptString(secret);
        this.set(this.getSecretStorageKey(key), encryptedValue.toString("base64"));
    }

    /**
     * Delete the stored password for the key.
     * Removes from safeStorage, keytar & keytar legacy.
     *
     * @param key The string key name.
     */
    public async deleteSecret(key: string): Promise<void> {
        await this.safeStorageReady();

        await this.deleteSecretKeytar(LEGACY_KEYTAR_SERVICE, key);
        await this.deleteSecretKeytar(KEYTAR_SERVICE, key);
        if (safeStorage.isEncryptionAvailable()) {
            this.delete(this.getSecretStorageKey(key));
        }
    }

    private async deleteSecretKeytar(namespace: string, key: string): Promise<void> {
        await keytar.deletePassword(namespace, key);
    }
}

declare global {
    // eslint-disable-next-line no-var
    var store: Store;
}

if (!global.store) {
    global.store = new Store();
}

export default global.store;
