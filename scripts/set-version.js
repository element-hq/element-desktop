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
    console.log("Version set to " + ver);
}

main().then((ret) => process.exit(ret));
