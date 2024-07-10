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

import { defineConfig } from "@playwright/test";

export default defineConfig({
    use: {
        viewport: { width: 1280, height: 720 },
        video: "retain-on-failure",
        trace: "on-first-retry",
    },
    testDir: "playwright/e2e",
    outputDir: "playwright/test-results",
    workers: 1,
    retries: process.env.CI ? 2 : 0,
    reporter: [["html", { outputFolder: "playwright/html-report" }]],
    snapshotDir: "playwright/snapshots",
    snapshotPathTemplate: "{snapshotDir}/{testFilePath}/{arg}-{platform}{ext}",
    timeout: 30 * 1000,
});
