/*
Copyright 2024 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { _electron as electron, test as base, expect as baseExpect, type ElectronApplication } from "@playwright/test";
import fs from "node:fs/promises";
import path, { dirname } from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

interface Fixtures {
    app: ElectronApplication;
    tmpDir: string;
    extraEnv: Record<string, string>;
    extraArgs: string[];
}

const __dirname = dirname(fileURLToPath(import.meta.url));

export const test = base.extend<Fixtures>({
    extraEnv: {},
    extraArgs: [],
    // eslint-disable-next-line no-empty-pattern
    tmpDir: async ({}, use) => {
        const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "element-desktop-tests-"));
        console.log("Using temp profile directory: ", tmpDir);
        await use(tmpDir);
        await fs.rm(tmpDir, { recursive: true });
    },
    app: async ({ tmpDir, extraEnv, extraArgs }, use) => {
        const args = ["--profile-dir", tmpDir];

        const executablePath = process.env["ELEMENT_DESKTOP_EXECUTABLE"];
        if (!executablePath) {
            // Unpackaged mode testing
            args.unshift(path.join(__dirname, "..", "lib", "electron-main.js"));
        }

        const app = await electron.launch({
            env: {
                ...process.env,
                ...extraEnv,
            },
            executablePath,
            args: [...args, ...extraArgs],
        });

        app.process().stdout.pipe(process.stdout);
        app.process().stderr.pipe(process.stderr);

        await app.firstWindow();

        // Block matrix.org access to ensure consistent tests
        const context = app.context();
        await context.route("https://matrix.org/**", async (route) => {
            await route.abort();
        });

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
