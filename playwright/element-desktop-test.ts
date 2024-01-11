/*
Copyright 2023 The Matrix.org Foundation C.I.C.

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

import { _electron as electron, test as base, expect as baseExpect, type ElectronApplication } from "@playwright/test";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";

export const test = base.extend<{ app: ElectronApplication; tmpDir: string }>({
    // eslint-disable-next-line no-empty-pattern
    tmpDir: async ({}, use) => {
        const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "element-desktop-tests-"));
        console.log("Using temp profile directory: ", tmpDir);
        await use(tmpDir);
        await fs.rm(tmpDir, { recursive: true });
    },
    app: async ({ tmpDir }, use) => {
        const args = ["--profile-dir", tmpDir];

        const executablePath = process.env["ELEMENT_DESKTOP_EXECUTABLE"];
        if (!executablePath) {
            // Unpackaged mode testing
            args.unshift("./lib/electron-main.js");
        }

        const app = await electron.launch({
            env: process.env,
            executablePath,
            args,
        });

        await app.firstWindow();
        await use(app);
    },
    page: async ({ app }, use) => {
        const window = await app.firstWindow();
        await use(window);
        await app.close().catch((e) => {
            console.error(e);
        });
    },
});

export const expect = baseExpect;
