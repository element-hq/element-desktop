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
const fsProm = require('fs').promises;
const childProcess = require('child_process');

const rimraf = require('rimraf');
const glob = require('glob');
const mkdirp = require('mkdirp');

async function copy(hakEnv, moduleInfo) {
    if (moduleInfo.cfg.prune) {
        console.log("Removing " + moduleInfo.cfg.prune + " from " + moduleInfo.moduleOutDir);
        // rimraf doesn't have a 'cwd' option: it always uses process.cwd()
        // (and if you set glob.cwd it just breaks because it can't find the files)
        const oldCwd = process.cwd();
        try {
            process.chdir(moduleInfo.moduleOutDir);
            await new Promise((resolve, reject) => {
                rimraf(moduleInfo.cfg.prune, {}, err => {
                    err ? reject(err) : resolve();
                });
            });
        } finally {
            process.chdir(oldCwd);
        }
    }

    if (moduleInfo.cfg.copy) {
        // If there are multiple moduleBuildDirs, singular moduleBuildDir
        // is the same as moduleBuildDirs[0], so we're just listing the contents
        // of the first one.
        const files = await new Promise(async (resolve, reject) => {
            glob(moduleInfo.cfg.copy, {
                nosort: true,
                silent: true,
                cwd: moduleInfo.moduleBuildDir,
            }, (err, files) => {
                err ? reject(err) : resolve(files);
            });
        });

        if (moduleInfo.moduleBuildDirs.length > 1) {
            if (!hakEnv.isMac()) {
                console.error(
                    "You asked me to copy multiple targets but I've only been taught " +
                    "how to do that on macOS.",
                );
                throw new Error("Can't copy multiple targets on this platform");
            }

            for (const f of files) {
                const components = moduleInfo.moduleBuildDirs.map(dir => path.join(dir, f));
                const dst = path.join(moduleInfo.moduleOutDir, f);

                await mkdirp(path.dirname(dst));
                await new Promise((resolve, reject) => {
                    childProcess.execFile('lipo',
                        ['-create', '-output', dst, ...components], (err) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve();
                            }
                        },
                    );
                });
            }
        } else {
            console.log(
                "Copying files from " +
                moduleInfo.moduleBuildDir + " to " + moduleInfo.moduleOutDir,
            );
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

module.exports = copy;
