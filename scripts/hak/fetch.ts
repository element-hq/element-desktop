/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import fsProm from "fs/promises";
import childProcess from "child_process";
import pacote from "pacote";

import HakEnv from "./hakEnv";
import { DependencyInfo } from "./dep";

export default async function fetch(hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    let haveModuleBuildDir;
    try {
        const stats = await fsProm.stat(moduleInfo.moduleBuildDir);
        haveModuleBuildDir = stats.isDirectory();
    } catch (e) {
        haveModuleBuildDir = false;
    }

    if (haveModuleBuildDir) return;

    console.log("Fetching " + moduleInfo.name + "@" + moduleInfo.version);

    const packumentCache = new Map();
    await pacote.extract(`${moduleInfo.name}@${moduleInfo.version}`, moduleInfo.moduleBuildDir, {
        packumentCache,
    });

    console.log("Running yarn install in " + moduleInfo.moduleBuildDir);
    await new Promise<void>((resolve, reject) => {
        const proc = childProcess.spawn(hakEnv.isWin() ? "yarn.cmd" : "yarn", ["install", "--ignore-scripts"], {
            stdio: "inherit",
            cwd: moduleInfo.moduleBuildDir,
            // We need shell mode on Windows to be able to launch `.cmd` executables
            // See https://nodejs.org/en/blog/vulnerability/april-2024-security-releases-2
            shell: hakEnv.isWin(),
        });
        proc.on("exit", (code) => {
            code ? reject(code) : resolve();
        });
    });

    // also extract another copy to the output directory at this point
    // nb. we do not yarn install in the output copy: we could install in
    // production mode to get only runtime dependencies and not devDependencies,
    // but usually native modules come with dependencies that are needed for
    // building/fetching the native modules (eg. node-pre-gyp) rather than
    // actually used at runtime: we do not want to bundle these into our app.
    // We therefore just install no dependencies at all, and accept that any
    // actual runtime dependencies will have to be added to the main app's
    // dependencies. We can't tell what dependencies are real runtime deps
    // and which are just used for native module building.
    await pacote.extract(`${moduleInfo.name}@${moduleInfo.version}`, moduleInfo.moduleOutDir, {
        packumentCache,
    });
}
