#!/usr/bin/env -S npx ts-node

/*
 * Checks for the presence of a webapp, inspects its version and prints it
 */

import { versionFromAsar } from "./set-version";

async function main(): Promise<number> {
    const version = await versionFromAsar();
    console.log(version);

    return 0;
}

if (require.main === module) {
    main()
        .then((ret) => {
            process.exit(ret);
        })
        .catch((e) => {
            console.error(e);
            process.exit(1);
        });
}
