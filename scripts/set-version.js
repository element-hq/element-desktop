#!/usr/bin/env node

/*
 * Checks for the presence of a webapp, inspects its version and sets the
 * version metadata of the package to match.
 */

const fs = require('fs').promises;
const asar = require('asar');
const childProcess = require('child_process');

async function versionFromAsar() {
    try {
        await fs.stat('webapp.asar');
    } catch (e) {
        console.log("No 'webapp.asar' found. Run 'yarn run fetch'");
        return 1;
    }

    return asar.extractFile('webapp.asar', 'version').toString().trim();
}

async function setPackageVersion(ver) {
    // set version in package.json: electron-builder will use this to populate
    // all the various version fields
    await new Promise((resolve, reject) => {
        childProcess.execFile(process.platform === 'win32' ? 'yarn.cmd' : 'yarn', [
            'version',
            '-s',
            '--no-git-tag-version', // This also means "don't commit to git" as it turns out
            '--new-version',
            ver,
        ], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

async function main(args) {
    let version = args[0];

    if (version === undefined) version = await versionFromAsar();

    await setPackageVersion(version);
}

if (require.main === module) {
    main(process.argv.slice(2)).then((ret) => process.exit(ret));
}

module.exports = { versionFromAsar, setPackageVersion };
