/*
Copyright 2021 New Vector Ltd

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

import { Session } from 'electron';
import fs from 'fs';
import type Store from 'electron-store';

export interface ProxyConfig {
    mode?: "direct" | "auto_detect" | "pac_script" | "fixed_servers" | "system";
    pacScript?: string;
    proxyRules?: string;
    proxyBypassRules?: string;
}

type TypedStore = Store<{ proxy?: ProxyConfig }>;

export class Proxy {
    public ready: Promise<any>;
    private static readonly STORE_KEY = "proxy";

    private readonly store: TypedStore;
    private readonly sessions: Array<Session>;
    private proxy: ProxyConfig;
    private pacWatcher: fs.FSWatcher;

    constructor( { store, sessions = [] }: { store: TypedStore, sessions: Session[] }) {
        this.store = store;
        this.sessions = sessions;

        if (this.store.has(Proxy.STORE_KEY)) {
            console.log("Setting up proxy.");
            this.setProxy(this.store.get(Proxy.STORE_KEY));
        }
    }

    public setProxy(proxy: ProxyConfig): void {
        this.proxy = proxy;
        this.store.set(Proxy.STORE_KEY, this.proxy);
        if (this.proxy.pacScript) {
            // Add custom handling for the file: URI handler as chromium does not support it
            // https://bugs.chromium.org/p/chromium/issues/detail?id=839566#c40
            const pacURL = new URL(this.proxy.pacScript);
            if (pacURL.protocol === 'file:') {
                this.setProxyFromPACFile(pacURL.pathname);
                this.watchProxyPACFile(pacURL.pathname);
            }
        }
    }

    public async applyProxy(): Promise<any> {
        // Apply the proxy config to the sessions
        if (!this.proxy) return;

        return Promise.allSettled(
            this.sessions.map((session) =>
                session.closeAllConnections() // Ensure all in-progress connections are closed
                    .then(() => session.setProxy(this.proxy)) // Set the proxy settings
                    .then(() => session.forceReloadProxyConfig()), // Ensure the updated config has been reloaded
            ));
    }

    private setProxyFromPACFile(pacFile: fs.PathLike): void {
        // Convert PAC file path into a base64 data: URI
        if (!this.proxy) return;

        const pacBuf = fs.readFileSync(pacFile);
        this.proxy.pacScript = `data:application/x-javascript-config;base64,${pacBuf.toString('base64')}`;
    }

    private watchProxyPACFile(pacFile: fs.PathLike): void {
        // Watch the PAC file for changes and reapply config if a change is detected
        if (this.pacWatcher) return;

        this.pacWatcher = fs.watch(pacFile, async (event) => {
            console.log("Started watching PAC file.");
        });

        this.pacWatcher.on('change', (eventType: string) => {
            console.log("PAC file changed, updating proxy settings.");
            this.setProxyFromPACFile(pacFile);
            this.applyProxy();
        });

        this.pacWatcher.on('close', () => {
            console.log("Stopped watching PAC file.");
        });
    }

    public close(): void {
        // Cleanup the fs watcher
        if (!this.pacWatcher) return;

        this.pacWatcher.close();
        this.pacWatcher = null;
    }
}
