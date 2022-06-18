/*
Copyright 2020-2021 The Matrix.org Foundation C.I.C.

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

import childProcess from 'child_process';
import fsProm from 'fs/promises';

import HakEnv from '../../scripts/hak/hakEnv';
import { DependencyInfo } from '../../scripts/hak/dep';

export default async function(hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    if (hakEnv.wantsStaticSqlCipher()) {
        // of course tcl doesn't have a --version
        await new Promise<void>((resolve, reject) => {
            const proc = childProcess.spawn('tclsh', [], {
                stdio: ['pipe', 'ignore', 'ignore'],
            });
            proc.on('exit', (code) => {
                if (code !== 0) {
                    reject("Can't find tclsh - have you installed TCL?");
                } else {
                    resolve();
                }
            });
            proc.stdin.end();
        });
    }

    const tools = [
        ['rustc', '--version'],
        ['python', '--version'], // node-gyp uses python for reasons beyond comprehension
    ];
    if (hakEnv.isWin()) {
        tools.push(['perl', '--version']); // for openssl configure
        tools.push(['nasm', '-v']); // for openssl building
        tools.push(['patch', '--version']); // to patch sqlcipher Makefile.msc
        tools.push(['nmake', '/?']);
    } else {
        tools.push(['make', '--version']);
    }

    for (const tool of tools) {
        await new Promise<void>((resolve, reject) => {
            const proc = childProcess.spawn(tool[0], tool.slice(1), {
                stdio: ['ignore'],
            });
            proc.on('exit', (code) => {
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
        const rustc = childProcess.execFile('rustc', [
            '--target', hakEnv.getTargetId(), '-o', 'tmp', '-',
        ], (err, out) => {
            if (err) {
                reject(
                    "rustc can't build for target " + hakEnv.getTargetId() +
                    ": ensure target is installed via `rustup target add " + hakEnv.getTargetId() + "` " +
                    "or your package manager if not using `rustup`",
                );
            }
            fsProm.unlink('tmp').then(resolve);
        });
        rustc.stdin.write('fn main() {}');
        rustc.stdin.end();
    });
}
