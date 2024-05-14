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

import childProcess from "child_process";

import HakEnv from "../../scripts/hak/hakEnv";
import { DependencyInfo } from "../../scripts/hak/dep";

export default async function (hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    const env = hakEnv.makeGypEnv();

    if (!hakEnv.isHost()) {
        env.CARGO_BUILD_TARGET = hakEnv.getTargetId();
    }

    console.log("Running yarn install");
    await new Promise<void>((resolve, reject) => {
        const proc = childProcess.spawn("yarn" + (hakEnv.isWin() ? ".cmd" : ""), ["install"], {
            cwd: moduleInfo.moduleBuildDir,
            env,
            shell: true,
            stdio: "inherit",
        });
        proc.on("exit", (code) => {
            code ? reject(code) : resolve();
        });
    });

    const buildTarget = hakEnv.wantsStaticSqlCipher() ? "build-bundled" : "build";

    console.log("Running yarn build");
    await new Promise<void>((resolve, reject) => {
        const proc = childProcess.spawn("yarn" + (hakEnv.isWin() ? ".cmd" : ""), ["run", buildTarget], {
            cwd: moduleInfo.moduleBuildDir,
            env,
            shell: true,
            stdio: "inherit",
        });
        proc.on("exit", (code) => {
            code ? reject(code) : resolve();
        });
    });
}
