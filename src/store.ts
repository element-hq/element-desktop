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
import { clearAllUserData, relaunchApp } from "@standardnotes/electron-clear-data";

import { _t } from "./language-helper.js";

/**
 * Legacy keytar service name for storing secrets.
 * @deprecated
 */
const KEYTAR_SERVICE = "element.io";
/**
 * Super legacy keytar service name for reading secrets.
 * @deprecated
 */
const LEGACY_KEYTAR_SERVICE = "riot.im";

/**
 * String union type representing all the safeStorage backends.
 * + The "unknown" backend shouldn't exist in practice once the app is ready
 * + The "plaintext" is the temporarily-unencrypted backend for migration, data is wholly unencrypted - uses PlaintextStorageWriter
 * + The "basic_text" backend is the 'plaintext' backend on Linux, data is encrypted but not using the keychain
 * + The "system" backend is the encrypted backend on Windows & macOS, data is encrypted using system keychain
 * + All other backends are linux-specific and are encrypted using the keychain
 */
type SafeStorageBackend = ReturnType<SafeStorage["getSelectedStorageBackend"]> | "system" | "plaintext";

/**
 * Map of safeStorage backends to their command line arguments.
 * kwallet6 cannot be specified via command line
 * https://www.electronjs.org/docs/latest/api/safe-storage#safestoragegetselectedstoragebackend-linux
 */
const safeStorageBackendMap: Omit<
    Record<SafeStorageBackend, string>,
    "unknown" | "kwallet6" | "system" | "plaintext"
> = {
    basic_text: "basic",
    gnome_libsecret: "gnome-libsecret",
    kwallet: "kwallet",
    kwallet5: "kwallet5",
};

/**
 * Clear all data and relaunch the app.
 */
export async function clearDataAndRelaunch(): Promise<void> {
    Store.instance?.clear();
    clearAllUserData();
    relaunchApp();
}

interface StoreData {
    warnBeforeExit: boolean;
    minimizeToTray: boolean;
    spellCheckerEnabled: boolean;
    autoHideMenuBar: boolean;
    locale?: string | string[];
    disableHardwareAcceleration: boolean;
    safeStorage?: Record<string, string>;
    /** the safeStorage backend used for the safeStorage data as written */
    safeStorageBackend?: SafeStorageBackend;
    /** whether to explicitly override the safeStorage backend, used for migration */
    safeStorageBackendOverride?: boolean;
    /** whether to perform a migration of the safeStorage data */
    safeStorageBackendMigrate?: boolean;
}

/**
 * Fallback storage writer for secrets, mainly used for automated tests and systems without any safeStorage support.
 */
class PlaintextStorageWriter {
    public constructor(protected readonly store: ElectronStore<StoreData>) {}

    public getKey(key: string): `safeStorage.${string}` {
        return `safeStorage.${key.replaceAll(".", "-")}`;
    }

    public set(key: string, secret: string): void {
        this.store.set(this.getKey(key), secret);
    }

    public get(key: string): string | null {
        return this.store.get(this.getKey(key));
    }

    public delete(key: string): void {
        this.store.delete(this.getKey(key));
    }
}

/**
 * Storage writer for secrets using safeStorage.
 */
class SafeStorageWriter extends PlaintextStorageWriter {
    public set(key: string, secret: string): void {
        this.store.set(this.getKey(key), safeStorage.encryptString(secret).toString("base64"));
    }

    public get(key: string): string | null {
        const ciphertext = this.store.get<string, string | undefined>(this.getKey(key));
        if (ciphertext) {
            try {
                return safeStorage.decryptString(Buffer.from(ciphertext, "base64"));
            } catch (e) {
                console.error("Failed to decrypt secret", e);
                console.error("...ciphertext:", JSON.stringify(ciphertext));
            }
        }
        return null;
    }
}

const enum Mode {
    Encrypted = "encrypted", // default
    AllowPlaintext = "allow-plaintext",
    ForcePlaintext = "force-plaintext",
}

/**
 * JSON-backed store for settings which need to be accessible by the main process.
 * Secrets are stored within the `safeStorage` object, encrypted with safeStorage.
 * Any secrets operations are blocked on Electron app ready emit, and keytar migration if still needed.
 */
class Store extends ElectronStore<StoreData> {
    private static internalInstance?: Store;

    public static get instance(): Store | undefined {
        return Store.internalInstance;
    }

    /**
     * Prepare the store, does not prepare safeStorage, which needs to be done after the app is ready.
     * Must be executed in the first tick of the event loop so that it can call Electron APIs before ready state.
     */
    public static initialize(mode: Mode | undefined): Store {
        if (Store.internalInstance) {
            throw new Error("Store already initialized");
        }

        const store = new Store(mode ?? Mode.Encrypted);
        Store.internalInstance = store;

        if (process.platform === "linux" && store.get("safeStorageBackendOverride")) {
            const backend = store.get("safeStorageBackend")!;
            if (backend in safeStorageBackendMap) {
                // If the safeStorage backend which was used to write the data is one we can specify via the commandLine
                // then do so to ensure we use the same backend for reading the data.
                app.commandLine.appendSwitch(
                    "password-store",
                    safeStorageBackendMap[backend as keyof typeof safeStorageBackendMap],
                );
            }
        }

        return store;
    }

    // Provides "raw" access to the underlying secrets storage,
    // should be avoided in favour of the getSecret/setSecret/deleteSecret methods.
    private secrets: PlaintextStorageWriter | SafeStorageWriter;

    private constructor(private mode: Mode) {
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
                safeStorageBackendMigrate: {
                    type: "boolean",
                },
            },
        });

        // May be upgraded to a SafeStorageWriter later in prepareSafeStorage
        this.secrets = new PlaintextStorageWriter(this);
    }

    private safeStorageReadyPromise?: Promise<unknown>;
    public async safeStorageReady(): Promise<void> {
        if (!this.safeStorageReadyPromise) {
            this.safeStorageReadyPromise = this.prepareSafeStorage();
        }
        await this.safeStorageReadyPromise;
    }

    /**
     * Prepare the safeStorage backend for use.
     * We don't eagerly import from keytar as that would bring in data for all Element profiles and not just the current one,
     * so we import lazily in getSecret.
     */
    private async prepareSafeStorage(): Promise<void> {
        await app.whenReady();

        let safeStorageBackend = this.get("safeStorageBackend");
        if (process.platform === "linux") {
            // Linux safeStorage support is hellish, the support varies on the Desktop Environment used rather than the store itself.
            // https://github.com/electron/electron/issues/39789 https://github.com/microsoft/vscode/issues/185212
            const selectedSafeStorageBackend = safeStorage.getSelectedStorageBackend();
            console.info(
                `safeStorage backend '${selectedSafeStorageBackend}' selected, '${safeStorageBackend}' in config.`,
            );

            if (selectedSafeStorageBackend === "unknown") {
                // This should never happen but good to be safe
                await dialog.showMessageBox({
                    title: _t("store|error|unknown_backend_override_title"),
                    message: _t("store|error|unknown_backend_override"),
                    detail: _t("store|error|unknown_backend_override_details"),
                    type: "error",
                });
                throw new Error("safeStorage backend unknown");
            }

            if (this.get("safeStorageBackendMigrate")) {
                return this.upgradeLinuxBackend2();
            }

            if (!safeStorageBackend) {
                if (selectedSafeStorageBackend === "basic_text" && this.mode === Mode.Encrypted) {
                    const { response } = await dialog.showMessageBox({
                        title: _t("store|error|unsupported_keyring_title"),
                        message: _t("store|error|unsupported_keyring"),
                        detail: _t("store|error|unsupported_keyring_detail", {
                            link: "https://www.electronjs.org/docs/latest/api/safe-storage#safestoragegetselectedstoragebackend-linux",
                        }),
                        type: "error",
                        buttons: [_t("action|cancel"), _t("store|error|unsupported_keyring_cta")],
                        defaultId: 0,
                        cancelId: 0,
                    });
                    if (response === 0) {
                        throw new Error("safeStorage backend basic_text and user rejected it");
                    }
                    this.mode = Mode.AllowPlaintext;
                }

                // Store the backend used for the safeStorage data so we can detect if it changes
                this.recordSafeStorageBackend(selectedSafeStorageBackend);
                safeStorageBackend = selectedSafeStorageBackend;
            } else if (safeStorageBackend !== selectedSafeStorageBackend) {
                console.warn(`safeStorage backend changed from ${safeStorageBackend} to ${selectedSafeStorageBackend}`);

                if (safeStorageBackend === "basic_text") {
                    return this.upgradeLinuxBackend1();
                } else if (safeStorageBackend === "plaintext") {
                    this.upgradeLinuxBackend3();
                } else if (safeStorageBackend in safeStorageBackendMap) {
                    this.set("safeStorageBackendOverride", true);
                    relaunchApp();
                    return;
                } else {
                    // Warn the user that the backend has changed and tell them that we cannot migrate
                    const { response } = await dialog.showMessageBox({
                        title: _t("store|error|backend_changed_title"),
                        message: _t("store|error|backend_changed"),
                        detail: _t("store|error|backend_changed_detail"),
                        type: "question",
                        buttons: [_t("common|no"), _t("common|yes")],
                        defaultId: 0,
                        cancelId: 0,
                    });
                    if (response === 0) {
                        throw new Error("safeStorage backend changed and cannot migrate");
                    }
                    await clearDataAndRelaunch();
                }
            }

            // We do not check allowPlaintextStorage here as it was already checked above if the storage is new
            // and if the storage is existing then we should continue to honour the backend used to write the data
            if (safeStorageBackend === "basic_text" && selectedSafeStorageBackend === safeStorageBackend) {
                safeStorage.setUsePlainTextEncryption(true);
            }
        } else if (!safeStorageBackend) {
            safeStorageBackend = this.mode === Mode.Encrypted ? "system" : "plaintext";
            this.recordSafeStorageBackend(safeStorageBackend);
        }

        if (this.mode !== Mode.ForcePlaintext && safeStorage.isEncryptionAvailable()) {
            this.secrets = new SafeStorageWriter(this);
        } else if (this.mode === Mode.Encrypted) {
            throw new Error(`safeStorage is not available`);
        }

        console.info(`Using storage mode '${this.mode}' with backend '${safeStorageBackend}'`);
    }

    private recordSafeStorageBackend(backend: SafeStorageBackend): void {
        this.set("safeStorageBackend", backend);
    }

    /**
     * Linux support for upgrading the backend from basic_text to one of the encrypted backends,
     * this is quite a tricky process as the backend is not known until the app is ready & cannot be changed once it is.
     * First we restart the app in basic_text backend mode, then decrypt the data & restart back in default backend mode,
     * and re-encrypt the data.
     */
    private upgradeLinuxBackend1(): void {
        console.info(`Starting safeStorage migration to ${safeStorage.getSelectedStorageBackend()}`);
        this.set("safeStorageBackendMigrate", true);
        relaunchApp();
    }
    private upgradeLinuxBackend2(): void {
        console.info("Performing safeStorage migration");
        const data = this.get("safeStorage");
        if (data) {
            for (const key in data) {
                this.set(this.secrets.getKey(key), this.secrets!.get(key));
            }
            this.recordSafeStorageBackend("plaintext");
        }
        this.set("safeStorageBackendMigrate", false);
        relaunchApp();
    }
    private upgradeLinuxBackend3(): void {
        const selectedSafeStorageBackend = safeStorage.getSelectedStorageBackend();
        console.info(`Finishing safeStorage migration to ${selectedSafeStorageBackend}`);
        const data = this.get("safeStorage");
        if (data) {
            for (const key in data) {
                this.secrets.set(key, data[key]);
            }
        }
        this.recordSafeStorageBackend(selectedSafeStorageBackend);
    }

    /**
     * Get the stored secret for the key.
     * Lazily migrates keys from keytar if they are not yet in the store.
     *
     * @param key The string key name.
     *
     * @returns A promise for the secret string.
     */
    public async getSecret(key: string): Promise<string | null> {
        await this.safeStorageReady();
        let secret = this.secrets.get(key);
        if (secret) return secret;

        try {
            secret = await this.getSecretKeytar(key);
        } catch (e) {
            console.warn(`Failed to read data from keytar with key='${key}'`, e);
        }
        if (secret) {
            console.debug("Migrating secret from keytar", key);
            this.secrets.set(key, secret);
        }

        return secret;
    }

    /**
     * Add the secret for the key to the keychain.
     * We write to both safeStorage & keytar to support downgrading the application.
     *
     * @param key The string key name.
     * @param secret The string password.
     *
     * @returns A promise for the set password completion.
     */
    public async setSecret(key: string, secret: string): Promise<void> {
        await this.safeStorageReady();
        this.secrets.set(key, secret);
        try {
            await keytar.setPassword(KEYTAR_SERVICE, key, secret);
        } catch (e) {
            console.warn(`Failed to write safeStorage backwards-compatibility key='${key}' data to keytar`, e);
        }
    }

    /**
     * Delete the stored password for the key.
     * Removes from safeStorage, keytar & keytar legacy.
     *
     * @param key The string key name.
     */
    public async deleteSecret(key: string): Promise<void> {
        await this.safeStorageReady();
        this.secrets.delete(key);
        try {
            await this.deleteSecretKeytar(key);
        } catch (e) {
            console.warn(`Failed to delete secret with key='${key}' from keytar`, e);
        }
    }

    /**
     * @deprecated will be removed in the near future
     */
    private async getSecretKeytar(key: string): Promise<string | null> {
        return (
            (await keytar.getPassword(KEYTAR_SERVICE, key)) ?? (await keytar.getPassword(LEGACY_KEYTAR_SERVICE, key))
        );
    }

    /**
     * @deprecated will be removed in the near future
     */
    private async deleteSecretKeytar(key: string): Promise<void> {
        await keytar.deletePassword(LEGACY_KEYTAR_SERVICE, key);
        await keytar.deletePassword(KEYTAR_SERVICE, key);
    }
}

export default Store;
