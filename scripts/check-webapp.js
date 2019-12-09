#!/usr/bin/env node

const fs = require('fs').promises;

async function main() {
    try {
        const webappDir = await fs.opendir('webapp');
        return 0;
    } catch (e) {
        console.log("No 'webapp' directory found. Run 'yarn run fetch' or symlink manually");
        return 1;
    }
}

main().then((ret) => process.exit(ret));
