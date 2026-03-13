/*
Copyright 2026 Hiroshi Shinaoka

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, expect, it, vi } from "vitest";

import { TokenizerMode } from "../../src/seshat-config.js";
import { initEventIndex } from "../../src/seshat-index.js";

describe("initEventIndex", () => {
    it("passes ngram config when opening a new index", async () => {
        const mkdir = vi.fn().mockResolvedValue(undefined);
        const deleteContents = vi.fn().mockResolvedValue(undefined);
        const eventIndex = { kind: "index" };
        const Seshat = vi.fn().mockImplementation(() => eventIndex);
        const SeshatRecovery = vi.fn();
        const fixtureValue = "fixture-value";

        class FakeReindexError extends Error {}

        const result = await initEventIndex("/tmp/EventStore", fixtureValue, TokenizerMode.Ngram, {
            mkdir,
            deleteContents,
            createSeshat: Seshat,
            createSeshatRecovery: SeshatRecovery,
            isReindexError: (error) => error instanceof FakeReindexError,
        });

        expect(mkdir).toHaveBeenCalledWith("/tmp/EventStore", { recursive: true });
        expect(Seshat).toHaveBeenCalledWith("/tmp/EventStore", {
            passphrase: fixtureValue,
            tokenizerMode: TokenizerMode.Ngram,
            ngramMinSize: 2,
            ngramMaxSize: 4,
        });
        expect(SeshatRecovery).not.toHaveBeenCalled();
        expect(result).toEqual({ eventIndex });
    });

    it("passes tokenizer config through the reindex recovery path", async () => {
        const mkdir = vi.fn().mockResolvedValue(undefined);
        const deleteContents = vi.fn().mockResolvedValue(undefined);
        const reopenedIndex = { kind: "reopened-index" };
        const fixtureValue = "fixture-value";
        const recoveryIndex = {
            getUserVersion: vi.fn().mockResolvedValue(1),
            shutdown: vi.fn().mockResolvedValue(undefined),
            reindex: vi.fn().mockResolvedValue(undefined),
        };

        class FakeReindexError extends Error {}

        const Seshat = vi
            .fn()
            .mockImplementationOnce(() => {
                throw new FakeReindexError("schema changed");
            })
            .mockImplementationOnce(() => reopenedIndex);
        const SeshatRecovery = vi.fn().mockImplementation(() => recoveryIndex);

        const result = await initEventIndex("/tmp/EventStore", fixtureValue, TokenizerMode.Language, {
            mkdir,
            deleteContents,
            createSeshat: Seshat,
            createSeshatRecovery: SeshatRecovery,
            isReindexError: (error) => error instanceof FakeReindexError,
        });

        expect(SeshatRecovery).toHaveBeenCalledWith("/tmp/EventStore", {
            passphrase: fixtureValue,
            tokenizerMode: TokenizerMode.Language,
        });
        expect(recoveryIndex.reindex).toHaveBeenCalledOnce();
        expect(Seshat).toHaveBeenNthCalledWith(2, "/tmp/EventStore", {
            passphrase: fixtureValue,
            tokenizerMode: TokenizerMode.Language,
        });
        expect(deleteContents).not.toHaveBeenCalled();
        expect(result).toEqual({ eventIndex: reopenedIndex });
    });

    it("recreates the index and reports wasRecreated for non-reindex failures", async () => {
        const mkdir = vi.fn().mockResolvedValue(undefined);
        const deleteContents = vi.fn().mockResolvedValue(undefined);
        const recreatedIndex = { kind: "recreated-index" };
        const fixtureValue = "fixture-value";
        const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

        class FakeReindexError extends Error {}

        const Seshat = vi
            .fn()
            .mockImplementationOnce(() => {
                throw new Error("schema mismatch");
            })
            .mockImplementationOnce(() => recreatedIndex);
        const SeshatRecovery = vi.fn();

        const result = await initEventIndex("/tmp/EventStore", fixtureValue, TokenizerMode.Ngram, {
            mkdir,
            deleteContents,
            createSeshat: Seshat,
            createSeshatRecovery: SeshatRecovery,
            isReindexError: (error) => error instanceof FakeReindexError,
        });

        expect(deleteContents).toHaveBeenCalledWith("/tmp/EventStore");
        expect(Seshat).toHaveBeenNthCalledWith(2, "/tmp/EventStore", {
            passphrase: fixtureValue,
            tokenizerMode: TokenizerMode.Ngram,
            ngramMinSize: 2,
            ngramMaxSize: 4,
        });
        expect(SeshatRecovery).not.toHaveBeenCalled();
        expect(warnSpy).toHaveBeenCalledOnce();
        expect(result).toEqual({ eventIndex: recreatedIndex, wasRecreated: true });

        warnSpy.mockRestore();
    });
});
