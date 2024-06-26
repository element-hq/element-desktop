/*
Copyright 2017 OpenMarket Ltd

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

import path from "path";
import { spawn } from "child_process";
import { app } from "electron";

export function getSquirrelExecutable(): string {
    return path.resolve(path.dirname(process.execPath), "..", "Update.exe");
}

function runUpdateExe(args: string[]): Promise<void> {
    // Invokes Squirrel's Update.exe which will do things for us like create shortcuts
    // Note that there's an Update.exe in the app-x.x.x directory and one in the parent
    // directory: we need to run the one in the parent directory, because it discovers
    // information about the app by inspecting the directory it's run from.
    const updateExe = getSquirrelExecutable();
    console.log(`Spawning '${updateExe}' with args '${args}'`);
    return new Promise((resolve) => {
        spawn(updateExe, args, {
            detached: true,
        }).on("close", resolve);
    });
}

function checkSquirrelHooks(): boolean {
    if (process.platform !== "win32") return false;
    const cmd = process.argv[1];
    const target = path.basename(process.execPath);

    switch (cmd) {
        case "--squirrel-install":
            void runUpdateExe(["--createShortcut=" + target]).then(() => app.quit());
            return true;

        case "--squirrel-updated":
        case "--squirrel-obsolete":
            app.quit();
            return true;

        case "--squirrel-uninstall":
            void runUpdateExe(["--removeShortcut=" + target]).then(() => app.quit());
            return true;

        default:
            return false;
    }
}

if (checkSquirrelHooks()) {
    process.exit(1);
}
