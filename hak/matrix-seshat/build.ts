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

function run(
    moduleInfo: DependencyInfo,
    cmd: string,
    args: string[],
    env: Record<string, string | undefined>,
): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        const proc = childProcess.spawn(cmd, args, {
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

export default async function (hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    const env = hakEnv.makeGypEnv();

    if (!hakEnv.isHost()) {
        env.CARGO_BUILD_TARGET = hakEnv.getTargetId();
    }
    const yarnCmd = "yarn" + (hakEnv.isWin() ? ".cmd" : "");

    console.log("Running yarn install");
    await run(moduleInfo, yarnCmd, ["install"], env);

    const buildTarget = hakEnv.wantsStaticSqlCipher() ? "build-bundled" : "build";

    console.log("Running yarn build");
    await run(moduleInfo, yarnCmd, ["run", buildTarget], env);
}
