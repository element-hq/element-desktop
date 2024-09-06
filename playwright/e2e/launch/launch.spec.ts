/*
Copyright 2024 New Vector Ltd.
Copyright 2022, 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
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
