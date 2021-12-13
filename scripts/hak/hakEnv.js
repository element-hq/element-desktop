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

const path = require('path');
const os = require('os');

const nodePreGypVersioning = require('node-pre-gyp/lib/util/versioning');
const getElectronVersion = require('app-builder-lib/out/electron/electronVersion').getElectronVersion;

const { TARGETS, getHost, isHostId } = require('./target');

function getRuntime(projectRoot) {
    const electronVersion = getElectronVersion(projectRoot);
    return electronVersion ? 'electron' : 'node-webkit';
}

function getRuntimeVersion(projectRoot) {
    const electronVersion = getElectronVersion(projectRoot);
    if (electronVersion) {
        return electronVersion;
    } else {
        return process.version.substr(1);
    }
}

module.exports = class HakEnv {
    constructor(prefix, targetId) {
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
    }

    async init() {
        Object.assign(this, {
            // what we're targeting
            runtime: await getRuntime(this.projectRoot),
            runtimeVersion: await getRuntimeVersion(this.projectRoot),

            // paths
            dotHakDir: path.join(this.projectRoot, '.hak'),
        });
    }

    getRuntimeAbi() {
        return nodePreGypVersioning.get_runtime_abi(
            this.runtime,
            this.runtimeVersion,
        );
    }

    // {node_abi}-{platform}-{arch}
    getNodeTriple() {
        return this.getRuntimeAbi() + '-' + this.target.platform + '-' + this.target.arch;
    }

    getTargetId() {
        return this.target.id;
    }

    isWin() {
        return this.target.platform === 'win32';
    }

    isMac() {
        return this.target.platform === 'darwin';
    }

    isLinux() {
        return this.target.platform === 'linux';
    }

    getTargetArch() {
        return this.target.arch;
    }

    isHost() {
        return isHostId(this.target.id);
    }

    makeGypEnv() {
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

    getNodeModuleBin(name) {
        return path.join(this.projectRoot, 'node_modules', '.bin', name);
    }
};
