#!/usr/bin/env node

const process = require('process');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const childProcess = require('child_process');
const tar = require('tar');
const asar = require('asar');
const needle = require('needle');

const riotDesktopPackageJson = require('../package.json');

const PUB_KEY_URL = "https://packages.riot.im/element-release-key.asc";
const PACKAGE_URL_PREFIX = "https://github.com/vector-im/element-web/releases/download/";
const ASAR_PATH = 'webapp.asar';

const { setPackageVersion } = require('./set-version.js');

async function getLatestDevelopUrl(bkToken) {
    const buildsResult = await needle('get',
        "https://api.buildkite.com/v2/organizations/matrix-dot-org/pipelines/element-web/builds",
        {
            branch: 'develop',
            state: 'passed',
            per_page: 1,
        },
        {
            headers: {
                authorization: "Bearer " + bkToken,
            },
        },
    );
    const latestBuild = buildsResult.body[0];
    console.log("Latest build is " + latestBuild.number);
    let artifactUrl;
    for (const job of latestBuild.jobs) {
        // Strip any colon-form emoji from the build name
        if (job.name && job.name.replace(/:\w*:\s*/, '') === 'Package') {
            artifactUrl = job.artifacts_url;
            break;
        }
    }
    if (artifactUrl === undefined) {
        throw new Error("Couldn't find artifact URL - has the name of the package job changed?");
    }

    const artifactsResult = await needle('get', artifactUrl, {},
        {
            headers: {
                authorization: "Bearer " + bkToken,
            },
        },
    );
    let dlUrl;
    let dlFilename;
    for (const artifact of artifactsResult.body) {
        if (artifact.filename && /^element-.*\.tar.gz$/.test(artifact.filename)) {
            dlUrl = artifact.download_url;
            dlFilename = artifact.filename;
            break;
        }
    }
    if (dlUrl === undefined) {
        throw new Error("Couldn't find artifact download URL - has the artifact filename changed?");
    }
    console.log("Fetching artifact URL...");
    const dlResult = await needle('get', dlUrl, {},
        {
            headers: {
                authorization: "Bearer " + bkToken,
            },
            // This URL will give us a Location header, but will also give us
            // a JSON object with the direct URL. We'll take the URL and pass it
            // back, then we can easily support specifying a URL directly.
            follow_max: 0,
        },
    );
    return [dlFilename, dlResult.body.url];
}

async function downloadToFile(url, filename) {
    console.log("Downloading " + url + "...");

    try {
        await needle('get', url, null,
            {
                follow_max: 5,
                output: filename,
            },
        );
    } catch (e) {
        try {
            await fsPromises.unlink(filename);
        } catch (_) {}
        throw e;
    }
}

async function verifyFile(filename) {
    return new Promise((resolve, reject) => {
        childProcess.execFile('gpg', ['--verify', filename + '.asc', filename], (error) => {
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
    let cfgDir;
    let targetVersion;
    let filename;
    let url;
    let setVersion = false;

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
            case '--cfgdir':
            case '-d':
                process.argv.shift();
                cfgDir = process.argv[2];
                break;
            default:
                targetVersion = process.argv[2];
        }
        process.argv.shift();
    }

    if (targetVersion === undefined) {
        targetVersion = 'v' + riotDesktopPackageJson.version;
        filename = 'element-' + targetVersion + '.tar.gz';
        url = PACKAGE_URL_PREFIX + targetVersion + '/' + filename;
    } else if (targetVersion === 'develop') {
        const buildKiteApiKey = process.env.BUILDKITE_API_KEY;
        if (buildKiteApiKey === undefined) {
            console.log("Set BUILDKITE_API_KEY to fetch latest develop version");
            console.log(
                "Sorry - Buildkite's API requires authentication to access builds, " +
                "even if those builds are accessible on the web with no auth.",
            );
            process.exit(1);
        }
        [filename, url] = await getLatestDevelopUrl(buildKiteApiKey);
        verify = false; // develop builds aren't signed
    } else {
        filename = 'element-' + targetVersion + '.tar.gz';
        url = PACKAGE_URL_PREFIX + targetVersion + '/' + filename;
        setVersion = true;
    }

    const haveGpg = await new Promise((resolve) => {
        childProcess.execFile('gpg', ['--version'], (error) => {
            resolve(!error);
        });
    });

    if (importkey) {
        if (!haveGpg) {
            console.log("Can't import key without working GPG binary: install GPG and try again");
            return 1;
        }

        await new Promise((resolve) => {
            const gpgProc = childProcess.execFile('gpg', ['--import'], (error) => {
                if (error) {
                    console.log("Failed to import key", error);
                } else {
                    console.log("Key imported!");
                }
                resolve(!error);
            });
            needle.get(PUB_KEY_URL).pipe(gpgProc.stdin);
        });
        return 0;
    }

    if (cfgDir === undefined) {
        console.log("No config directory set");
        console.log("Specify a config directory with --cfgdir or -d");
        console.log("To build with no config (and no auto-update), pass the empty string (-d '')");
        return 1;
    }

    if (verify && !haveGpg) {
        console.log("No working GPG binary: install GPG or pass --noverify to skip verification");
        return 1;
    }

    let haveDeploy = false;
    const expectedDeployDir = path.join(deployDir, path.basename(filename).replace(/\.tar\.gz/, ''));
    try {
        await fs.opendir(expectedDeployDir);
        console.log(expectedDeployDir + "already exists");
        haveDeploy = true;
    } catch (e) {
    }

    if (!haveDeploy) {
        const outPath = path.join(pkgDir, filename);
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

    try {
        await fsPromises.stat(ASAR_PATH);
        console.log(ASAR_PATH + " already present: removing");
        await fsPromises.unlink(ASAR_PATH);
    } catch (e) {
    }

    if (cfgDir.length) {
        const configJsonSource = path.join(cfgDir, 'config.json');
        const configJsonDest = path.join(expectedDeployDir, 'config.json');
        console.log(configJsonSource + ' -> ' + configJsonDest);
        await fsPromises.copyFile(configJsonSource, configJsonDest);
    } else {
        console.log("Skipping config file");
    }

    console.log("Pack " + expectedDeployDir + " -> " + ASAR_PATH);
    await asar.createPackage(expectedDeployDir, ASAR_PATH);

    if (setVersion) {
        const semVer = targetVersion.slice(1);
        console.log("Updating version to " + semVer);
        await setPackageVersion(semVer);
    }

    console.log("Done!");
}

main().then((ret) => process.exit(ret)).catch(e => process.exit(1));
