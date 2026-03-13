/*
Copyright 2025 New Vector Ltd.

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
let isGlibCxxOutdated = false;

function importVenmic(): void {
    if (imported) {
        return;
    }

    imported = true;

    try {
        // Load the native .node file directly to avoid needing the full
        // venmic JS entry point and its pkg-prebuilds dependency chain in the
        // packaged app. This follows the same approach used by Vesktop.
        const nativePath = join(
            __dirname,
            "..",
            "node_modules",
            "@vencord",
            "venmic",
            "prebuilds",
            `venmic-addon-linux-${process.arch}`,
            "node-napi-v7.node",
        );
        PatchBay = (nativeRequire(nativePath) as { PatchBay: typeof PatchBayType }).PatchBay;
        hasPipewirePulse = PatchBay.hasPipeWire();
    } catch (e: unknown) {
        const message = e instanceof Error ? (e.stack ?? e.message) : String(e);
        console.error("Failed to import venmic:", message);
        isGlibCxxOutdated = /GLIBC_\d/.test(message);
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

ipcMain.handle("getVenmicList", () => {
    const audioPid = getRendererAudioServicePid();

    const targets = obtainVenmic()
        ?.list()
        .filter((s) => s["application.process.id"] !== audioPid);

    return targets ? { ok: true, targets, hasPipewirePulse } : { ok: false, isGlibCxxOutdated };
});

ipcMain.handle("startVenmic", (_ev, include: Node[]) => {
    const pid = getRendererAudioServicePid();

    const data: LinkData = {
        include,
        exclude: [{ "application.process.id": pid }, { "media.class": "Stream/Input/Audio" }],
        ignore_devices: true,
    };

    return obtainVenmic()?.link(data);
});

ipcMain.handle("startVenmicSystem", (_ev, exclude: Node[]) => {
    const pid = getRendererAudioServicePid();

    const data: LinkData = {
        include: [],
        exclude: [{ "application.process.id": pid }, { "media.class": "Stream/Input/Audio" }, ...exclude],
        only_speakers: true,
        only_default_speakers: true,
        ignore_devices: true,
    };

    return obtainVenmic()?.link(data);
});

ipcMain.handle("stopVenmic", () => obtainVenmic()?.unlink());
