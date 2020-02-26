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

async function setDebVersion(ver) {
    // Also create a debian package control file with the version.
    // We use a custom control file so we need to do this ourselves
    const outFile = await fs.open('pkg/control', 'w');
    const template = await fs.readFile('pkg/control.template');
    await outFile.write(template);
    await outFile.write('Version: ' + ver + "\n");
    await outFile.close();

    console.log("Version set to " + ver);
}

async function main(args) {
    let setDeb = false;
    let setPkg = false;
    let version;

    for (const arg of args) {
        if (arg === '--deb') {
            setDeb = true;
        } else if (arg === '--pkg') {
            setPkg = true;
        } else {
            version = arg;
        }
    }

    if (version === undefined) version = await versionFromAsar();

    if (setPkg) setDebVersion(ver);
    if (setDeb) setDebVersion(ver);
}

if (require.main === module) {
    main(process.argv.slice(2)).then((ret) => process.exit(ret));
}

module.exports = {versionFromAsar, setPackageVersion, setDebVersion};
