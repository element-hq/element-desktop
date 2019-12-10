#!/usr/bin/env node

const process = require('process');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const { https } = require('follow-redirects');
const child_process = require('child_process');
const tar = require('tar');

const riotDesktopPackageJson = require('../package.json');

const PUB_KEY_URL = "https://packages.riot.im/riot-release-key.asc";
const PACKAGE_URL_PREFIX = "https://github.com/vector-im/riot-web/releases/download/";

async function downloadToFile(url, filename) {
    console.log("Downloading " + url + "...");
    const outStream = await fs.createWriteStream(filename);

    return new Promise((resolve, reject) => {
        https.get(url, (resp) => {
            if (resp.statusCode / 100 !== 2) {
                reject("Download failed: " + resp.statusCode);
                return;
            }

            resp.on('data', (chunk) => {
                outStream.write(chunk);
            });
            resp.on('end', (chunk) => {
                outStream.end();
                resolve();
            });
        });
    }).catch(async (e) => {
        outStream.end();
        await fsPromises.unlink(filename);
        throw e;
    });
}

async function verifyFile(filename) {
    return new Promise((resolve, reject) => {
        const gpgProc = child_process.execFile('gpg', ['--verify', filename + '.asc', filename], (error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}

async function main() {
    let verify = true;
    let importkey = false;
    let pkgDir = 'packages';
    let deployDir = 'deploys';
    let targetVersion;

    while (process.argv.length > 2) {
        switch (process.argv[2]) {
            case '--noverify':
                verify = false;
                break;
            case '--importkey':
                importkey = true;
                break;
            case '--packages':
                process.argv.shift();
                pkgDir = process.argv[2];
                break;
            case '--deploys':
                process.argv.shift();
                deployDir = process.argv[2];
                break;
            default:
                targetVersion = process.argv[2];
        }
        process.argv.shift();
    }

    if (targetVersion === undefined) {
        targetVersion = 'v' + riotDesktopPackageJson.version;
    }

    const haveGpg = await new Promise((resolve) => {
        child_process.execFile('gpg', ['--version'], (error) => {
            resolve(!error);
        });
    });

    if (importkey) {
        if (!haveGpg) {
            console.log("Can't import key without working GPG binary: install GPG and try again");
            return 1;
        }

        await new Promise((resolve) => {
            const gpgProc = child_process.execFile('gpg', ['--import'], (error) => {
                if (error) {
                    console.log("Failed to import key", error);
                } else {
                    console.log("Key imported!");
                }
                resolve(!error);
            });
            https.get(PUB_KEY_URL, (resp) => {
                resp.on('data', (chunk) => {
                    gpgProc.stdin.write(chunk);
                });
                resp.on('end', (chunk) => {
                    gpgProc.stdin.end();
                });
            });
        });
    }
        
    if (verify && !haveGpg) {
        console.log("No working GPG binary: install GPG or pass --noverify to skip verification");
        return 1;
    }

    const haveDeploy = false;
    const expectedDeployDir = path.join(deployDir, 'riot-' + targetVersion);
    try {
        const webappDir = await fs.opendir(expectedDeployDir);
        console.log(expectedDeployDir + "already exists");
        haveDeploy = true;
    } catch (e) {
    }

    if (!haveDeploy) {
        const filename = 'riot-' + targetVersion + '.tar.gz';
        const outPath = path.join(pkgDir, filename);
        const url = PACKAGE_URL_PREFIX + targetVersion + '/' + filename;
        try {
            await fsPromises.stat(outPath);
            console.log("Already have " + filename + ": not redownloading");
        } catch (e) {
            try {
                await downloadToFile(url, outPath);
            } catch (e) {
                console.log("Failed to download " + url, e);
                return 1;
            }
        }

        if (verify) {
            try {
                await fsPromises.stat(outPath+'.asc');
                console.log("Already have " + filename + ".asc: not redownloading");
            } catch (e) {
                try {
                    await downloadToFile(url + '.asc', outPath + '.asc');
                } catch (e) {
                    console.log("Failed to download " + url, e);
                    return 1;
                }
            }

            try {
                await verifyFile(outPath);
                console.log(outPath + " downloaded and verified");
            } catch (e) {
                console.log("Signature verification failed!", e);
                return 1;
            }
        } else {
            console.log(outPath + " downloaded but NOT verified");
        }

        await tar.x({
            file: outPath,
            cwd: deployDir,
        });
    }

    console.log("Symlink " + expectedDeployDir + " -> webapp");
    // 'junction' here creates a junction point on Windows (and is
    // ignored everywhere else). The default type requires special
    // permissions on Windows, but junction points don't and appear
    // to do the right thing.
    await fsPromises.symlink(expectedDeployDir, 'webapp', 'junction');
}

main().then((ret) => process.exit(ret));
