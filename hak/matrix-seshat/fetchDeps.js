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

const fsProm = require('fs').promises;
const needle = require('needle');
const tar = require('tar');

module.exports = async function(hakEnv, moduleInfo) {
    await getSqlCipher(hakEnv, moduleInfo);

    if (hakEnv.isWin()) {
        getOpenSsl(hakEnv, moduleInfo);
    }
}

async function getSqlCipher(hakEnv, moduleInfo) {
    const sqlCipherDir = path.join(moduleInfo.moduleHakDir, 'sqlcipher-4.3.0');

    let haveSqlcipher;
    try {
        await fsProm.stat(sqlCipherDir);
        haveSqlcipher = true;
    } catch (e) {
        haveSqlcipher = false;
    }

    if (haveSqlcipher) return;

    const sqlCipherTarball = path.join(moduleInfo.moduleHakDir, 'sqlcipher-4.3.0.tar.gz');
    let haveSqlcipherTar;
    try {
        await fsProm.stat(sqlCipherTarball);
        haveSqlcipherTar = true;
    } catch (e) {
        haveSqlcipherTar = false;
    }
    if (!haveSqlcipherTar) {
        const bob =  needle('get', 'https://github.com/sqlcipher/sqlcipher/archive/v4.3.0.tar.gz', {
            follow: 10,
            output: sqlCipherTarball,
        });
        await bob;
    }

    await tar.x({
        file: sqlCipherTarball,
        cwd: moduleInfo.moduleHakDir,
    });
}

async function getOpenSsl(hakEnv, moduleInfo) {
    const openSslDir = path.join(moduleInfo.moduleHakDir, 'openssl-1.1.1d');

    let haveOpenSsl;
    try {
        await fsProm.stat(openSslDir);
        haveOpenSsl = true;
    } catch (e) {
        haveOpenSsl = false;
    }

    if (haveOpenSsl) return;

    const openSslTarball = path.join(moduleInfo.depDir, 'openssl-1.1.1d.tar.gz');
    let haveOpenSslTar;
    try {
        await fsProm.stat(openSslTarball);
        haveOpenSslTar = true;
    } catch (e) {
        haveOpenSslTar = false;
    }
    if (!haveOpenSslTar) {
        await needle('get', 'https://www.openssl.org/source/openssl-1.1.1d.tar.gz', {
            follow: 10,
            output: openSslTarball,
        });
    }

    await tar.x({
        file: openSslTarball,
        cwd: moduleInfo.depDir,
    });
}
