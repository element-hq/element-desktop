/*
Copyright 2020 The Matrix.org Foundation C.I.C.

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

const path = require('path');
const childProcess = require('child_process');

const fs = require('fs');
const fsProm = require('fs').promises;
const needle = require('needle');
const tar = require('tar');

module.exports = async function(hakEnv, moduleInfo) {
    if (!hakEnv.isLinux()) {
        await getSqlCipher(hakEnv, moduleInfo);
    }

    if (hakEnv.isWin()) {
        await getOpenSsl(hakEnv, moduleInfo);
    }
};

async function getSqlCipher(hakEnv, moduleInfo) {
    const version = moduleInfo.cfg.dependencies.sqlcipher;
    const sqlCipherDir = path.join(moduleInfo.moduleTargetDotHakDir, `sqlcipher-${version}`);

    let haveSqlcipher;
    try {
        await fsProm.stat(sqlCipherDir);
        haveSqlcipher = true;
    } catch (e) {
        haveSqlcipher = false;
    }

    if (haveSqlcipher) return;

    const sqlCipherTarball = path.join(moduleInfo.moduleDotHakDir, `sqlcipher-${version}.tar.gz`);
    let haveSqlcipherTar;
    try {
        await fsProm.stat(sqlCipherTarball);
        haveSqlcipherTar = true;
    } catch (e) {
        haveSqlcipherTar = false;
    }
    if (!haveSqlcipherTar) {
        const bob = needle('get', `https://github.com/sqlcipher/sqlcipher/archive/v${version}.tar.gz`, {
            follow: 10,
            output: sqlCipherTarball,
        });
        await bob;
    }

    // Extract the tarball to per-target directories, then we avoid cross-contaiminating archs
    await tar.x({
        file: sqlCipherTarball,
        cwd: moduleInfo.moduleTargetDotHakDir,
    });

    if (hakEnv.isWin()) {
        // On Windows, we need to patch the makefile because it forces TEMP_STORE to
        // default to files (1) but the README specifically says you '*must*' set it
        // set it to 2 (default to memory).
        const patchFile = path.join(moduleInfo.moduleHakDir, `sqlcipher-${version}-win.patch`);

        await new Promise((resolve, reject) => {
        const readStream = fs.createReadStream(patchFile);

            const proc = childProcess.spawn(
                'patch',
                ['-p1'],
                {
                    cwd: sqlCipherDir,
                    stdio: ['pipe', 'inherit', 'inherit'],
                },
            );
            proc.on('exit', (code) => {
                code ? reject(code) : resolve();
            });
            readStream.pipe(proc.stdin);
        });
    }
}

async function getOpenSsl(hakEnv, moduleInfo) {
    const version = moduleInfo.cfg.dependencies.openssl;
    const openSslDir = path.join(moduleInfo.moduleTargetDotHakDir, `openssl-${version}`);

    let haveOpenSsl;
    try {
        await fsProm.stat(openSslDir);
        haveOpenSsl = true;
    } catch (e) {
        haveOpenSsl = false;
    }

    if (haveOpenSsl) return;

    const openSslTarball = path.join(moduleInfo.moduleDotHakDir, `openssl-${version}.tar.gz`);
    let haveOpenSslTar;
    try {
        await fsProm.stat(openSslTarball);
        haveOpenSslTar = true;
    } catch (e) {
        haveOpenSslTar = false;
    }
    if (!haveOpenSslTar) {
        await needle('get', `https://www.openssl.org/source/openssl-${version}.tar.gz`, {
            follow: 10,
            output: openSslTarball,
        });
    }

    console.log("extracting " + openSslTarball + " in " + moduleInfo.moduleTargetDotHakDir);
    await tar.x({
        file: openSslTarball,
        cwd: moduleInfo.moduleTargetDotHakDir,
    });
}
