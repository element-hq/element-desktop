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

import fsProm from 'fs/promises';
import childProcess from 'child_process';
import pacote from 'pacote';

import HakEnv from './hakEnv';
import { DependencyInfo } from './dep';

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
        const proc = childProcess.spawn(
            hakEnv.isWin() ? 'yarn.cmd' : 'yarn',
            ['install', '--ignore-scripts'],
            {
                stdio: 'inherit',
                cwd: moduleInfo.moduleBuildDir,
            },
        );
        proc.on('exit', code => {
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
