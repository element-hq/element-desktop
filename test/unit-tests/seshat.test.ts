/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { createSeshatConfig } from "../../src/seshat-config";

describe("createSeshatConfig", () => {
    it("returns ngram config when tokenizerMode is 'ngram'", () => {
        const config = createSeshatConfig("ngram");
        expect(config).toEqual({
            tokenizerMode: "ngram",
            ngramMinSize: 2,
            ngramMaxSize: 4,
        });
    });

    it("returns language config when tokenizerMode is 'language'", () => {
        const config = createSeshatConfig("language");
        expect(config).toEqual({
            tokenizerMode: "language",
        });
    });

    it("defaults to language config when tokenizerMode is undefined", () => {
        const config = createSeshatConfig(undefined);
        expect(config).toEqual({
            tokenizerMode: "language",
        });
    });

    it("defaults to language config when tokenizerMode is unknown", () => {
        const config = createSeshatConfig("unknown");
        expect(config).toEqual({
            tokenizerMode: "language",
        });
    });
});
