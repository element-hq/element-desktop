/*
Copyright 2026 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { app, ipcMain } from "electron";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import type { LinkData, Node, PatchBay as PatchBayType } from "@vencord/venmic";

const __dirname = dirname(fileURLToPath(import.meta.url));
const nativeRequire = createRequire(import.meta.url);

let PatchBay: typeof PatchBayType | undefined;
let patchBayInstance: PatchBayType | undefined;

let imported = false;
let initialized = false;

let hasPipewirePulse = false;
let isGlibcOutdated = false;

export type VenmicListResult =
    | { ok: true; targets: Node[]; hasPipewirePulse: boolean }
    | { ok: false; isGlibcOutdated: boolean };

function importVenmic(): void {
    if (imported) {
        return;
    }

    imported = true;

    try {
        // Load the native .node file directly from lib/ where it's copied
        // during build. This follows the same approach used by Vesktop.
        const nativePath = join(__dirname, `venmic-${process.arch}.node`);
        PatchBay = (nativeRequire(nativePath) as { PatchBay: typeof PatchBayType }).PatchBay;
        hasPipewirePulse = PatchBay.hasPipeWire();
    } catch (e: unknown) {
        const message = e instanceof Error ? (e.stack ?? e.message) : String(e);
        console.error("Failed to import venmic:", message);
        isGlibcOutdated = message.toLowerCase().includes("glibc");
    }
}

function obtainVenmic(): PatchBayType | undefined {
    if (!imported) {
        importVenmic();
    }

    if (PatchBay && !initialized) {
        initialized = true;

        try {
            patchBayInstance = new PatchBay();
        } catch (e) {
            console.error("Failed to instantiate venmic:", e);
        }
    }

    return patchBayInstance;
}

function getRendererAudioServicePid(): string {
    const audioService = app.getAppMetrics().find((proc) => proc.name === "Audio Service");
    if (!audioService) {
        console.warn("venmic: could not find Audio Service process for filtering");
    }
    return audioService?.pid?.toString() ?? "";
}

/**
 * List available audio nodes for sharing.
 * Can be called directly from main process code.
 */
export function listVenmicNodes(): VenmicListResult {
    const audioPid = getRendererAudioServicePid();

    const targets = obtainVenmic()
        ?.list()
        .filter((s) => s["application.process.id"] !== audioPid);

    return targets ? { ok: true, targets, hasPipewirePulse } : { ok: false, isGlibcOutdated };
}

/**
 * Start capturing audio from specific application nodes.
 * Can be called directly from main process code.
 */
export function startVenmicDirect(include: Node[]): boolean | undefined {
    const pid = getRendererAudioServicePid();

    const data: LinkData = {
        include,
        exclude: [{ "application.process.id": pid }, { "media.class": "Stream/Input/Audio" }],
        ignore_devices: true,
    };

    return obtainVenmic()?.link(data);
}

/**
 * Start capturing system-wide audio, optionally excluding specific nodes.
 * Can be called directly from main process code.
 */
export function startVenmicSystemDirect(exclude: Node[]): boolean | undefined {
    const pid = getRendererAudioServicePid();

    const data: LinkData = {
        include: [],
        exclude: [{ "application.process.id": pid }, { "media.class": "Stream/Input/Audio" }, ...exclude],
        only_speakers: true,
        only_default_speakers: true,
        ignore_devices: true,
    };

    return obtainVenmic()?.link(data);
}

/**
 * Stop the virtual microphone and clean up.
 * Can be called directly from main process code.
 */
export function stopVenmicDirect(): void {
    obtainVenmic()?.unlink();
}

// IPC handlers for renderer process access
ipcMain.handle("getVenmicList", () => listVenmicNodes());

ipcMain.handle("startVenmic", (_ev, include: Node[]) => startVenmicDirect(include));

ipcMain.handle("startVenmicSystem", (_ev, exclude: Node[]) => startVenmicSystemDirect(exclude));

ipcMain.handle("stopVenmic", () => stopVenmicDirect());
