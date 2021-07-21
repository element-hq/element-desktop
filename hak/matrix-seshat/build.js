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

const path = require('path');
const childProcess = require('child_process');

const mkdirp = require('mkdirp');
const fsExtra = require('fs-extra');

module.exports = async function(hakEnv, moduleInfo) {
    if (hakEnv.isWin()) {
        await buildOpenSslWin(hakEnv, moduleInfo);
        await buildSqlCipherWin(hakEnv, moduleInfo);
    } else if (hakEnv.isMac()) {
        await buildSqlCipherUnix(hakEnv, moduleInfo);
    }
    await buildMatrixSeshat(hakEnv, moduleInfo);
};

async function buildOpenSslWin(hakEnv, moduleInfo) {
    const version = moduleInfo.cfg.dependencies.openssl;
    const openSslDir = path.join(moduleInfo.moduleTargetDotHakDir, `openssl-${version}`);

    const openSslArch = hakEnv.getTargetArch() === 'x64' ? 'VC-WIN64A' : 'VC-WIN32';

    console.log("Building openssl in " + openSslDir);
    await new Promise((resolve, reject) => {
        const proc = childProcess.spawn(
            'perl',
            [
                'Configure',
                '--prefix=' + moduleInfo.depPrefix,
                 // sqlcipher only uses about a tiny part of openssl. We link statically
                 // so will only pull in the symbols we use, but we may as well turn off
                 // as much as possible to save on build time.
                'no-afalgeng',
                'no-capieng',
                'no-cms',
                'no-ct',
                'no-deprecated',
                'no-dgram',
                'no-dso',
                'no-ec',
                'no-ec2m',
                'no-gost',
                'no-nextprotoneg',
                'no-ocsp',
                'no-sock',
                'no-srp',
                'no-srtp',
                'no-tests',
                'no-ssl',
                'no-tls',
                'no-dtls',
                'no-shared',
                'no-aria',
                'no-camellia',
                'no-cast',
                'no-chacha',
                'no-cmac',
                'no-des',
                'no-dh',
                'no-dsa',
                'no-ecdh',
                'no-ecdsa',
                'no-idea',
                'no-md4',
                'no-mdc2',
                'no-ocb',
                'no-poly1305',
                'no-rc2',
                'no-rc4',
                'no-rmd160',
                'no-scrypt',
                'no-seed',
                'no-siphash',
                'no-sm2',
                'no-sm3',
                'no-sm4',
                'no-whirlpool',
                openSslArch,
            ],
            {
                cwd: openSslDir,
                stdio: 'inherit',
            },
        );
        proc.on('exit', (code) => {
            code ? reject(code) : resolve();
        });
    });

    await new Promise((resolve, reject) => {
        const proc = childProcess.spawn(
            'nmake',
            ['build_libs'],
            {
                cwd: openSslDir,
                stdio: 'inherit',
            },
        );
        proc.on('exit', (code) => {
            code ? reject(code) : resolve();
        });
    });

    await new Promise((resolve, reject) => {
        const proc = childProcess.spawn(
            'nmake',
            ['install_dev'],
            {
                cwd: openSslDir,
                stdio: 'inherit',
            },
        );
        proc.on('exit', (code) => {
            code ? reject(code) : resolve();
        });
    });
}

async function buildSqlCipherWin(hakEnv, moduleInfo) {
    const version = moduleInfo.cfg.dependencies.sqlcipher;
    const sqlCipherDir = path.join(moduleInfo.moduleTargetDotHakDir, `sqlcipher-${version}`);
    const buildDir = path.join(sqlCipherDir, 'bld');

    await mkdirp(buildDir);

    await new Promise((resolve, reject) => {
        const proc = childProcess.spawn(
            'nmake',
            ['/f', path.join('..', 'Makefile.msc'), 'libsqlite3.lib', 'TOP=..'],
            {
                cwd: buildDir,
                stdio: 'inherit',
                env: Object.assign({}, process.env, {
                    CCOPTS: "-DSQLITE_HAS_CODEC -I" + path.join(moduleInfo.depPrefix, 'include'),
                    LTLIBPATHS: "/LIBPATH:" + path.join(moduleInfo.depPrefix, 'lib'),
                    LTLIBS: "libcrypto.lib",
                }),
            },
        );
        proc.on('exit', (code) => {
            code ? reject(code) : resolve();
        });
    });

    await fsExtra.copy(
        path.join(buildDir, 'libsqlite3.lib'),
        path.join(moduleInfo.depPrefix, 'lib', 'sqlcipher.lib'),
    );

    await fsExtra.copy(
        path.join(buildDir, 'sqlite3.h'),
        path.join(moduleInfo.depPrefix, 'include', 'sqlcipher.h'),
    );
}

async function buildSqlCipherUnix(hakEnv, moduleInfo) {
    const version = moduleInfo.cfg.dependencies.sqlcipher;
    const sqlCipherDir = path.join(moduleInfo.moduleTargetDotHakDir, `sqlcipher-${version}`);

    const args = [
        '--prefix=' + moduleInfo.depPrefix + '',
        '--enable-tempstore=yes',
        '--enable-shared=no',
    ];

    if (hakEnv.isMac()) {
        args.push('--with-crypto-lib=commoncrypto');
    }

    if (!hakEnv.isHost()) {
        // In the nonsense world of `configure`, it is assumed you are building
        // a compiler like `gcc`, so the `host` option actually means the target
        // the build output runs on.
        args.push(`--host=${hakEnv.getTargetId()}`);
    }

    const cflags = [
        '-DSQLITE_HAS_CODEC',
    ];

    if (!hakEnv.isHost()) {
        // `clang` uses more logical option naming.
        cflags.push(`--target=${hakEnv.getTargetId()}`);
    }

    if (cflags.length) {
        args.push(`CFLAGS=${cflags.join(' ')}`);
    }

    const ldflags = [];

    if (hakEnv.isMac()) {
        ldflags.push('-framework Security');
        ldflags.push('-framework Foundation');
    }

    if (ldflags.length) {
        args.push(`LDFLAGS=${ldflags.join(' ')}`);
    }

    await new Promise((resolve, reject) => {
        const proc = childProcess.spawn(
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
        const proc = childProcess.spawn(
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
        const proc = childProcess.spawn(
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
    // seshat now uses n-api so we shouldn't need to specify a node version to
    // build against, but it does seems to still need something in here, so leaving
    // it for now: we should confirm how much of this it still actually needs.
    const env = hakEnv.makeGypEnv();

    if (!hakEnv.isLinux()) {
        Object.assign(env, {
            SQLCIPHER_STATIC: 1,
            SQLCIPHER_LIB_DIR: path.join(moduleInfo.depPrefix, 'lib'),
            SQLCIPHER_INCLUDE_DIR: path.join(moduleInfo.depPrefix, 'include'),
        });
    }

    if (hakEnv.isWin()) {
        env.RUSTFLAGS = '-Ctarget-feature=+crt-static -Clink-args=libcrypto.lib';
        // Note that in general, you can specify targets in Rust without having to have
        // the matching toolchain, however for this, cargo gets confused when building
        // the build scripts since they run on the host, but vcvarsall.bat sets the c
        // compiler in the path to be the one for the target, so we just use the matching
        // toolchain for the target architecture which makes everything happy.
        env.RUSTUP_TOOLCHAIN = `stable-${hakEnv.getTargetId()}`;
    }

    if (!hakEnv.isHost()) {
        env.CARGO_BUILD_TARGET = hakEnv.getTargetId();
    }

    console.log("Running neon with env", env);
    await new Promise((resolve, reject) => {
        const proc = childProcess.spawn(
            path.join(moduleInfo.nodeModuleBinDir, 'neon' + (hakEnv.isWin() ? '.cmd' : '')),
            ['build', '--release'],
            {
                cwd: moduleInfo.moduleBuildDir,
                env,
                stdio: 'inherit',
            },
        );
        proc.on('exit', (code) => {
            code ? reject(code) : resolve();
        });
    });
}
