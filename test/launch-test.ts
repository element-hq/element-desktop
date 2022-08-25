/*
Copyright 2022 The Matrix.org Foundation C.I.C.

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

import * as os from "os";
import * as fs from "fs";
import * as path from "path";
import "expect-playwright";
import { _electron as electron } from "playwright";
import { ElectronApplication, Page } from "playwright-core";

describe("App launch", () => {
    const artifactsPath = path.join(process.cwd(), "test_artifacts");
    fs.mkdirSync(artifactsPath);

    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "element-desktop-tests"));
    console.log("Using temp profile directory: ", tmpDir);

    let app: ElectronApplication;
    let window: Page;

    beforeAll(async () => {
        const args = ["--profile-dir", tmpDir];

        const executablePath = process.env["ELEMENT_DESKTOP_EXECUTABLE"];
        if (!executablePath) {
            // Unpackaged mode testing
            args.unshift("./lib/electron-main.js");
        }

        app = await electron.launch({
            executablePath,
            args,
            recordVideo: {
                dir: artifactsPath,
            }
        });
        window = await app.firstWindow();
    });

    afterAll(async () => {
        await app?.close();
        fs.rmSync(tmpDir, { recursive: true });
    });

    it("should launch and render the welcome view successfully", async () => {
        await window.locator("#matrixchat").waitFor();
        await window.locator(".mx_Welcome").waitFor();
        await expect(window).toMatchURL("vector://vector/webapp/#/welcome");
        await window.screenshot({ path: path.join(artifactsPath, "welcome.png") });
    }, 30000);
});
