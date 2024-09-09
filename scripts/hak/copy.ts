/*
Copyright 2024 New Vector Ltd.
Copyright 2020, 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import path from "path";
import fsProm from "fs/promises";
import childProcess from "child_process";
import { rimraf } from "rimraf";
import { glob } from "glob";
import { mkdirp } from "mkdirp";

import HakEnv from "./hakEnv";
import { DependencyInfo } from "./dep";

export default async function copy(hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    if (moduleInfo.cfg.prune) {
        console.log("Removing " + moduleInfo.cfg.prune + " from " + moduleInfo.moduleOutDir);
        // rimraf doesn't have a 'cwd' option: it always uses process.cwd()
        // (and if you set glob.cwd it just breaks because it can't find the files)
        const oldCwd = process.cwd();
        try {
            await mkdirp(moduleInfo.moduleOutDir);
            process.chdir(moduleInfo.moduleOutDir);
            await rimraf(moduleInfo.cfg.prune);
        } finally {
            process.chdir(oldCwd);
        }
    }

    if (moduleInfo.cfg.copy) {
        // If there are multiple moduleBuildDirs, singular moduleBuildDir
        // is the same as moduleBuildDirs[0], so we're just listing the contents
        // of the first one.
        const files = await glob(moduleInfo.cfg.copy, {
            cwd: moduleInfo.moduleBuildDir,
        });

        if (moduleInfo.moduleBuildDirs.length > 1) {
            if (!hakEnv.isMac()) {
                console.error(
                    "You asked me to copy multiple targets but I've only been taught " + "how to do that on macOS.",
                );
                throw new Error("Can't copy multiple targets on this platform");
            }

            for (const f of files) {
                const components = moduleInfo.moduleBuildDirs.map((dir) => path.join(dir, f));
                const dst = path.join(moduleInfo.moduleOutDir, f);

                await mkdirp(path.dirname(dst));
                await new Promise<void>((resolve, reject) => {
                    childProcess.execFile("lipo", ["-create", "-output", dst, ...components], (err) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve();
                        }
                    });
                });
            }
        } else {
            console.log("Copying files from " + moduleInfo.moduleBuildDir + " to " + moduleInfo.moduleOutDir);
            for (const f of files) {
                console.log("\t" + f);
                const src = path.join(moduleInfo.moduleBuildDir, f);
                const dst = path.join(moduleInfo.moduleOutDir, f);

                await mkdirp(path.dirname(dst));
                await fsProm.copyFile(src, dst);
            }
        }
    }
}
