/*
Copyright 2022 - 2023 The Matrix.org Foundation C.I.C.

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

import { test, expect } from "../../element-desktop-test";

declare global {
    interface Window {
        mxPlatformPeg: {
            get(): {
                getEventIndexingManager():
                    | {
                          supportsEventIndexing(): Promise<boolean>;
                      }
                    | undefined;
            };
        };
    }
}

test.describe("App launch", () => {
    test.slow();
    test("should launch and render the welcome view successfully and support seshat", async ({ page }) => {
        await page.locator("#matrixchat").waitFor();
        await page.locator(".mx_Welcome").waitFor();
        await expect(page).toHaveURL("vector://vector/webapp/#/welcome");
        await expect(page).toHaveScreenshot();

        const supported = await page.evaluate<boolean>(async () => {
            const indexManager = window.mxPlatformPeg.get()?.getEventIndexingManager();
            return await indexManager?.supportsEventIndexing();
        });

        expect(supported).toBe(true);
    });
});
