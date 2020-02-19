/*
Copyright 2020 The Matrix.org Foundation C.I.C.

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

function getElectronVersion(packageJson) {
    // should we pick the version of an installed electron
    // dependency, and if so, before or after electronVersion?
    if (packageJson.build && packageJson.build.electronVersion) {
        return packageJson.build.electronVersion;
    }
    return null;
}

function getRuntime(packageJson) {
    const electronVersion = getElectronVersion(packageJson);
    return electronVersion ? 'electron' : 'node-webkit';
}

function getTarget(packageJson) {
    const electronVersion = getElectronVersion(packageJson);
    if (electronVersion) {
        return electronVersion;
    } else {
        return process.version.substr(1);
    }
}

function detectArch() {
    if (process.platform === 'win32') {
        // vcvarsall.bat (the script that sets up the environment for
        // visual studio build tools) sets an env var to tell us what
        // architecture the active build tools target, so we auto-detect
        // this.
        const targetArch = process.env.VSCMD_ARG_TGT_ARCH;
        if (targetArch === 'x86') {
            return 'ia32';
        } else if (targetArch === 'x64') {
            return 'x64';
        }
    }
    return process.arch;
}

module.exports = class HakEnv {
    constructor(prefix, packageJson) {
        Object.assign(this, {
            // what we're targeting
            runtime: getRuntime(packageJson),
            target: getTarget(packageJson),
            platform: process.platform,
            arch: detectArch(),

            // paths
            projectRoot: prefix,
            dotHakDir: path.join(prefix, '.hak'),
        });
    }

    getRuntimeAbi() {
        return nodePreGypVersioning.get_runtime_abi(
            this.runtime,
            this.target,
        );
    }

    // {node_abi}-{platform}-{arch}
    getNodeTriple() {
        return this.getRuntimeAbi() + '-' + this.platform + '-' + this.arch;
    }

    isWin() {
        return this.platform === 'win32';
    }

    isMac() {
        return this.platform === 'darwin';
    }

    isLinux() {
        return this.platform === 'linux';
    }

    makeGypEnv() {
        return Object.assign({}, process.env, {
            npm_config_target: this.target,
            npm_config_arch: this.arch,
            npm_config_target_arch: this.arch,
            npm_config_disturl: 'https://atom.io/download/electron',
            npm_config_runtime: this.runtime,
            npm_config_build_from_source: true,
            npm_config_devdir: path.join(os.homedir(), ".electron-gyp"),
        });
    }

    getNodeModuleBin(name) {
        return path.join(this.projectRoot, 'node_modules', '.bin', name);
    }
};
