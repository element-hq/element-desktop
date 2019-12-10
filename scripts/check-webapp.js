#!/usr/bin/env node

const fs = require('fs').promises;

async function main() {
    try {
        const webappDir = await fs.stat('webapp.asar');
        return 0;
    } catch (e) {
        console.log("No 'webapp.asar' found. Run 'yarn run fetch'");
        return 1;
    }
}

main().then((ret) => process.exit(ret));
