/*
Copyright 2023 New Vector Ltd

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

import { type SafeStorage, safeStorage } from "electron";

/**
 * Save secrets on a local machine until logout.
 */
interface SecretStore {
    saveSecret(name: string, value: string): Promise<string | null>;
    getSecret(name: string): Promise<string | null>;
    destroySecret(name: string): Promise<void>;
}

class SafeStorageSecretStore implements SecretStore {
    public constructor(public readonly safeStorage: SafeStorage) { }

    public async saveSecret(name: string, value: string): Promise<string | null> {
        global.store.set(this.storeKey(name), this.safeStorage.encryptString(value).toString("base64"));
        return await this.getSecret(this.storeKey(name));
    }
    public async getSecret(name: string): Promise<string | null> {
        return this.safeStorage.decryptString(Buffer.from(global.store.get(this.storeKey(name)) as string, "base64"));
    }
    public async destroySecret(name: string): Promise<void> {
        global.store.delete(this.storeKey(name) as any);
    }

    private storeKey(name: string): string {
        return `safeStorage.${name}`;
    }
}

class NullSecretStore implements SecretStore {
    public async saveSecret(): Promise<string | null> { return null; }
    public async getSecret(): Promise<string | null> { return null; }
    public async destroySecret(): Promise<void> { }
}

function createSecretStore(): SecretStore {
    if (safeStorage.isEncryptionAvailable() && safeStorage.getSelectedStorageBackend() !== "basic_text") {
        return new SafeStorageSecretStore(safeStorage);
    }
    return new NullSecretStore();
}

let secretStore: SecretStore | null = null;
export function getSecretStore(): SecretStore {
    if (!secretStore) {
        secretStore = createSecretStore();
    }
    return secretStore;
}
