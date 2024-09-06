/*
Copyright 2024 New Vector Ltd.
Copyright 2020, 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import path from "path";
import os from "os";
import nodePreGypVersioning from "@mapbox/node-pre-gyp/lib/util/versioning";
import { getElectronVersionFromInstalled } from "app-builder-lib/out/electron/electronVersion";

import { Arch, Target, TARGETS, getHost, isHostId, TargetId } from "./target";

async function getRuntime(projectRoot: string): Promise<string> {
    const electronVersion = await getElectronVersionFromInstalled(projectRoot);
    return electronVersion ? "electron" : "node-webkit";
}

async function getRuntimeVersion(projectRoot: string): Promise<string> {
    const electronVersion = await getElectronVersionFromInstalled(projectRoot);
    if (electronVersion) {
        return electronVersion;
    } else {
        return process.version.substr(1);
    }
}

export default class HakEnv {
    public readonly target: Target;
    public runtime?: string;
    public runtimeVersion?: string;
    public dotHakDir: string;

    public constructor(
        public readonly projectRoot: string,
        targetId: TargetId | null,
    ) {
        const target = targetId ? TARGETS[targetId] : getHost();

        if (!target) {
            throw new Error(`Unknown target ${targetId}!`);
        }
        this.target = target;
        this.dotHakDir = path.join(this.projectRoot, ".hak");
    }

    public async init(): Promise<void> {
        this.runtime = await getRuntime(this.projectRoot);
        this.runtimeVersion = await getRuntimeVersion(this.projectRoot);
    }

    public getRuntimeAbi(): string {
        return nodePreGypVersioning.get_runtime_abi(this.runtime!, this.runtimeVersion!);
    }

    // {node_abi}-{platform}-{arch}
    public getNodeTriple(): string {
        return this.getRuntimeAbi() + "-" + this.target.platform + "-" + this.target.arch;
    }

    public getTargetId(): TargetId {
        return this.target.id;
    }

    public isWin(): boolean {
        return this.target.platform === "win32";
    }

    public isMac(): boolean {
        return this.target.platform === "darwin";
    }

    public isLinux(): boolean {
        return this.target.platform === "linux";
    }

    public isFreeBSD(): boolean {
        return this.target.platform === "freebsd";
    }

    public getTargetArch(): Arch {
        return this.target.arch;
    }

    public isHost(): boolean {
        return isHostId(this.target.id);
    }

    public makeGypEnv(): Record<string, string | undefined> {
        return {
            ...process.env,
            npm_config_arch: this.target.arch,
            npm_config_target_arch: this.target.arch,
            npm_config_disturl: "https://electronjs.org/headers",
            npm_config_runtime: this.runtime,
            npm_config_target: this.runtimeVersion,
            npm_config_build_from_source: "true",
            npm_config_devdir: path.join(os.homedir(), ".electron-gyp"),
        };
    }

    public wantsStaticSqlCipher(): boolean {
        return !(this.isLinux() || this.isFreeBSD()) || process.env.SQLCIPHER_BUNDLED == "1";
    }
}
