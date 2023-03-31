#!/usr/bin/env -S npx ts-node

/**
 * Script to generate electron-builder.json config files for builds which don't match package.json, e.g. nightlies
 * This script has different outputs depending on your os platform.
 *
 * On Windows:
 *  Prefixes the nightly version with `0.0.1-nightly.` as it breaks if it is not semver
 *
 * On macOS:
 *   Passes --notarytool-team-id to build.mac.notarize.notarize if specified and removes build.mac.afterSign
 *
 * On Linux:
 *  Replaces spaces in the product name with dashes as spaces in paths can cause issues
 *  Passes --deb-custom-control to build.deb.fpm if specified
 */

import parseArgs from "minimist";
import fsProm from "fs/promises";
import * as os from "os";
import { Configuration } from "app-builder-lib";

const ELECTRON_BUILDER_CFG_FILE = "electron-builder.json";

const NIGHTLY_APP_ID = "im.riot.nightly";
const NIGHTLY_APP_NAME = "element-desktop-nightly";

const argv = parseArgs<{
    "nightly"?: string;
    "signtool-thumbprint"?: string;
    "signtool-subject-name"?: string;
    "notarytool-team-id"?: string;
    "deb-custom-control"?: string;
    "deb-changelog"?: string;
}>(process.argv.slice(2), {
    string: [
        "nightly",
        "deb-custom-control",
        "deb-changelog",
        "signtool-thumbprint",
        "signtool-subject-name",
        "notarytool-team-id",
    ],
});

type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

interface PackageBuild extends DeepWriteable<Omit<Configuration, "extraMetadata">> {
    extraMetadata?: {
        productName?: string;
        name?: string;
        version?: string;
    };
}

interface Package {
    build: PackageBuild;
    productName: string;
}

async function main(): Promise<number | void> {
    // Electron builder doesn't overlay with the config in package.json, so load it here
    const pkg: Package = JSON.parse(await fsProm.readFile("package.json", "utf8"));

    const cfg: PackageBuild = {
        ...pkg.build,
        extraMetadata: {
            productName: pkg.productName,
        },
    };

    if (argv.nightly) {
        cfg.appId = NIGHTLY_APP_ID;
        cfg.extraMetadata!.productName += " Nightly";
        cfg.extraMetadata!.name = NIGHTLY_APP_NAME;

        let version = argv.nightly;
        if (os.platform() === "win32") {
            // The windows packager relies on parsing this as semver, so we have to make it look like one.
            // This will give our update packages really stupid names, but we probably can't change that either
            // because squirrel windows parses them for the version too. We don't really care: nobody sees them.
            // We just give the installer a static name, so you'll just see this in the 'about' dialog.
            // Turns out if you use 0.0.0 here it makes Squirrel windows crash, so we use 0.0.1.
            version = "0.0.1-nightly." + version;
        }
        cfg.extraMetadata!.version = version;
    }

    if (argv["signtool-thumbprint"] && argv["signtool-subject-name"]) {
        delete cfg.win!.sign;
        cfg.win!.signingHashAlgorithms = ["sha256"];
        cfg.win!.certificateSubjectName = argv["signtool-subject-name"];
        cfg.win!.certificateSha1 = argv["signtool-thumbprint"];
    }

    if (argv["notarytool-team-id"]) {
        delete cfg.afterSign;
        cfg.mac!.notarize = {
            teamId: argv["notarytool-team-id"],
        };
    }

    if (os.platform() === "linux") {
        // Electron crashes on debian if there's a space in the path.
        // https://github.com/vector-im/element-web/issues/13171
        cfg.extraMetadata!.productName = cfg.extraMetadata!.productName!.replace(/ /g, "-");

        cfg.deb = {
            fpm: [],
        };

        if (argv["deb-custom-control"]) {
            cfg.deb.fpm!.push(`--deb-custom-control=${argv["deb-custom-control"]}`);
        }
        if (argv["deb-changelog"]) {
            cfg.deb.fpm!.push(`--deb-changelog=${argv["deb-changelog"]}`);
        }
    }

    await fsProm.writeFile(ELECTRON_BUILDER_CFG_FILE, JSON.stringify(cfg, null, 4));
}

main()
    .then((ret) => {
        process.exit(ret!);
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
