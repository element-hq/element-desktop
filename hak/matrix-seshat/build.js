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
const child_process = require('child_process');

module.exports = async function(hakEnv, moduleInfo) {
    if (hakEnv.isWin()) await buildOpenSsl(hakEnv, moduleInfo);
    await buildSqlCipher(hakEnv, moduleInfo);
    await buildMatrixSeshat(hakEnv, moduleInfo);
}

async function buildOpenSsl(hakEnv, moduleInfo) {
    const openSslDir = path.join(moduleInfo.moduleHakDir, 'openssl-1.1.1d');
}

async function buildSqlCipher(hakEnv, moduleInfo) {
    const sqlCipherDir = path.join(moduleInfo.moduleHakDir, 'sqlcipher-4.3.0');

    const args = [
        '--prefix=' + moduleInfo.depPrefix + '',
        '--enable-tempstore=yes',
        '--enable-shared=no',
    ];

    if (hakEnv.isMac()) {
        args.push('--with-crypto-lib=commoncrypto');
    }
    args.push('CFLAGS=-DSQLITE_HAS_CODEC');
    if (hakEnv.isMac()) {
        args.push('LDFLAGS=-framework Security -framework Foundation');
    }

    await new Promise((resolve, reject) => {
        const proc = child_process.spawn(
            path.join(sqlCipherDir, 'configure'),
            args,
            {
                cwd: sqlCipherDir,
                stdio: 'inherit',
            },
        );
        proc.on('exit', (code) => {
            code ? reject(code) : resolve();
        });
    });

    await new Promise((resolve, reject) => {
        const proc = child_process.spawn(
            'make',
            [],
            {
                cwd: sqlCipherDir,
                stdio: 'inherit',
            },
        );
        proc.on('exit', (code) => {
            code ? reject(code) : resolve();
        });
    });

    await new Promise((resolve, reject) => {
        const proc = child_process.spawn(
            'make',
            ['install'],
            {
                cwd: sqlCipherDir,
                stdio: 'inherit',
            },
        );
        proc.on('exit', (code) => {
            code ? reject(code) : resolve();
        });
    });
}

async function buildMatrixSeshat(hakEnv, moduleInfo) {
    await new Promise((resolve) => {
        const proc = child_process.spawn(
            path.join(moduleInfo.nodeModuleBinDir, 'neon'),
            ['build', '--release'],
            {
                cwd: moduleInfo.moduleBuildDir,
                env: Object.assign({
                    SQLCIPHER_STATIC: 1,
                    SQLCIPHER_LIB_DIR: path.join(moduleInfo.depPrefix, 'lib'),
                    SQLCIPHER_INCLUDE_DIR: path.join(moduleInfo.depPrefix, 'include'),
                }, hakEnv.makeGypEnv()),
                stdio: 'inherit',
            },
        );
        proc.on('exit', (code) => {
            code ? reject(code) : resolve();
        });
    });
}
