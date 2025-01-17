/*
Copyright 2024 New Vector Ltd.
Copyright 2022, 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { platform } from "node:os";

import { test, expect } from "../../element-desktop-test.js";

declare global {
    interface Window {
        mxPlatformPeg: {
            get(): {
                getEventIndexingManager():
                    | {
                          supportsEventIndexing(): Promise<boolean>;
                      }
                    | undefined;
                createPickleKey(userId: string, deviceId: string): Promise<string | null>;
            };
        };
    }
}

test.describe("App launch", () => {
    test.slow();

    test.beforeEach(async ({ page }) => {
        await page.locator("#matrixchat").waitFor();
        await page.locator(".mx_Welcome").waitFor();
    });

    test("should launch and render the welcome view successfully", async ({ page }) => {
        await expect(page).toHaveURL("vector://vector/webapp/#/welcome");
        await expect(page).toHaveScreenshot();
    });

    test("should launch and render the welcome view successfully and support seshat", async ({ page }) => {
        await expect(
            page.evaluate<boolean>(async () => {
                return window.mxPlatformPeg.get().getEventIndexingManager()?.supportsEventIndexing();
            }),
        ).resolves.toBeTruthy();
    });

    test("should launch and render the welcome view successfully and support keytar", async ({ page }) => {
        test.skip(platform() === "linux", "This test does not yet support Linux");

        await expect(
            page.evaluate<string | null>(async () => {
                return await window.mxPlatformPeg.get().createPickleKey("@user:server", "ABCDEF");
            }),
        ).resolves.not.toBeNull();
    });
});
