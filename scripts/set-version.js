#!/usr/bin/env node

/*
 * Checks for the pre3sence of a webapp, inspects its version and sets the
 * version metadata of the package to match.
 */

const fs = require('fs').promises;
const asar = require('asar');
const child_process = require('child_process');

async function main() {
    try {
        const webappDir = await fs.stat('webapp.asar');
    } catch (e) {
        console.log("No 'webapp.asar' found. Run 'yarn run fetch'");
        return 1;
    }

    const ver = asar.extractFile('webapp.asar', 'version').toString().trim();

    // set version in package.json: electron-builder will use this to populate
    // all the various version fields
    await new Promise((resolve, reject) => {
        child_process.execFile('yarn', [
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

    // Also create a debian package control file with the version.
    // We use a custom control file so we need to do this ourselves
    const outFile = await fs.open('pkg/control', 'w');
    const template = await fs.readFile('pkg/control.template');
    await outFile.write(template);
    await outFile.write('Version: ' + ver + "\n");
    await outFile.close();

    console.log("Version set to " + ver);
}

main().then((ret) => process.exit(ret));
