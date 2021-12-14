/*
Copyright 2020-2021 The Matrix.org Foundation C.I.C.

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

import path from 'path';
import os from 'os';

import nodePreGypVersioning from "node-pre-gyp/lib/util/versioning";
import { getElectronVersion } from "app-builder-lib/out/electron/electronVersion";

import { Arch, Target, TARGETS, getHost, isHostId, TargetId } from './target';

async function getRuntime(projectRoot: string): Promise<string> {
    const electronVersion = await getElectronVersion(projectRoot);
    return electronVersion ? 'electron' : 'node-webkit';
}

async function getRuntimeVersion(projectRoot: string): Promise<string> {
    const electronVersion = await getElectronVersion(projectRoot);
    if (electronVersion) {
        return electronVersion;
    } else {
        return process.version.substr(1);
    }
}

export default class HakEnv {
    public target: Target;
    public projectRoot: string;
    public runtime: string;
    public runtimeVersion: string;
    public dotHakDir: string;

    constructor(prefix: string, targetId: TargetId) {
        let target;
        if (targetId) {
            target = TARGETS[targetId];
        } else {
            target = getHost();
        }

        if (!target) {
            throw new Error(`Unknown target ${targetId}!`);
        }
        this.target = target;
        this.projectRoot = prefix;
        this.dotHakDir = path.join(this.projectRoot, '.hak');
    }

    async init() {
        this.runtime = await getRuntime(this.projectRoot);
        this.runtimeVersion = await getRuntimeVersion(this.projectRoot);
    }

    getRuntimeAbi(): string {
        return nodePreGypVersioning.get_runtime_abi(
            this.runtime,
            this.runtimeVersion,
        );
    }

    // {node_abi}-{platform}-{arch}
    getNodeTriple(): string {
        return this.getRuntimeAbi() + '-' + this.target.platform + '-' + this.target.arch;
    }

    getTargetId(): TargetId {
        return this.target.id;
    }

    isWin(): boolean {
        return this.target.platform === 'win32';
    }

    isMac(): boolean {
        return this.target.platform === 'darwin';
    }

    isLinux(): boolean {
        return this.target.platform === 'linux';
    }

    getTargetArch(): Arch {
        return this.target.arch;
    }

    isHost(): boolean {
        return isHostId(this.target.id);
    }

    makeGypEnv(): Record<string, string> {
        return Object.assign({}, process.env, {
            npm_config_arch: this.target.arch,
            npm_config_target_arch: this.target.arch,
            npm_config_disturl: 'https://atom.io/download/electron',
            npm_config_runtime: this.runtime,
            npm_config_target: this.runtimeVersion,
            npm_config_build_from_source: true,
            npm_config_devdir: path.join(os.homedir(), ".electron-gyp"),
        });
    }

    getNodeModuleBin(name: string): string {
        return path.join(this.projectRoot, 'node_modules', '.bin', name);
    }
}
