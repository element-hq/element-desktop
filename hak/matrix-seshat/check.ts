/*
Copyright 2024 New Vector Ltd.
Copyright 2020, 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import childProcess from "child_process";
import fsProm from "fs/promises";

import HakEnv from "../../scripts/hak/hakEnv";
import { DependencyInfo } from "../../scripts/hak/dep";

export default async function (hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    const tools = [
        ["rustc", "--version"],
        ["python", "--version"], // node-gyp uses python for reasons beyond comprehension
    ];
    if (hakEnv.isWin()) {
        tools.push(["perl", "--version"]); // for openssl configure
        tools.push(["nasm", "-v"]); // for openssl building
        tools.push(["patch", "--version"]); // to patch sqlcipher Makefile.msc
        tools.push(["nmake", "/?"]);
    } else {
        tools.push(["make", "--version"]);
    }

    for (const tool of tools) {
        await new Promise<void>((resolve, reject) => {
            const proc = childProcess.spawn(tool[0], tool.slice(1), {
                stdio: ["ignore"],
            });
            proc.on("exit", (code) => {
                if (code !== 0) {
                    reject("Can't find " + tool);
                } else {
                    resolve();
                }
            });
        });
    }

    // Ensure Rust target exists (nb. we avoid depending on rustup)
    await new Promise((resolve, reject) => {
        const rustc = childProcess.execFile(
            "rustc",
            ["--target", hakEnv.getTargetId(), "--emit=obj", "-o", "tmp", "-"],
            (err, out) => {
                if (err) {
                    reject(
                        "rustc can't build for target " +
                            hakEnv.getTargetId() +
                            ": ensure target is installed via `rustup target add " +
                            hakEnv.getTargetId() +
                            "` " +
                            "or your package manager if not using `rustup`",
                    );
                }
                fsProm.unlink("tmp").then(resolve);
            },
        );
        rustc.stdin!.write("fn main() {}");
        rustc.stdout!.pipe(process.stdout);
        rustc.stderr!.pipe(process.stderr);
        rustc.stdin!.end();
    });
}
