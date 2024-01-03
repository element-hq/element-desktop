const os = require("os");
const fs = require("fs");

// Typescript conversion blocked on https://github.com/electron-userland/electron-builder/issues/7775

/**
 * This script has different outputs depending on your os platform.
 *
 * On Windows:
 *  Prefixes the nightly version with `0.0.1-nightly.` as it breaks if it is not semver
 *  Passes $ED_SIGNTOOL_THUMBPRINT and $ED_SIGNTOOL_SUBJECT_NAME to
 *      build.win.signingHashAlgorithms and build.win.certificateSubjectName respectively if specified.
 *
 * On macOS:
 *   Passes $ED_NOTARYTOOL_TEAM_ID to build.mac.notarize.notarize if specified
 *
 * On Linux:
 *  Replaces spaces in the product name with dashes as spaces in paths can cause issues
 *  Removes libsqlcipher0 recommended dependency if env SQLCIPHER_BUNDLED is asserted.
 *  Passes $ED_DEBIAN_CHANGELOG to build.deb.fpm if specified
 */

const NIGHTLY_APP_ID = "im.riot.nightly";
const NIGHTLY_APP_NAME = "element-desktop-nightly";
const NIGHTLY_DEB_NAME = "element-nightly";

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
    appId: "im.riot.app",
    asarUnpack: "**/*.node",
    files: [
        "package.json",
        {
            from: ".hak/hakModules",
            to: "node_modules",
        },
        "lib/**",
    ],
    extraResources: [
        {
            from: "res/img",
            to: "img",
        },
        "webapp.asar",
    ],
    extraMetadata: {
        productName: pkg.productName,
        description: pkg.description,
    },
    linux: {
        target: ["tar.gz", "deb"],
        category: "Network;InstantMessaging;Chat",
        maintainer: "support@element.io",
        icon: "build/icons",
        desktop: {
            MimeType: "x-scheme-handler/element",
        },
    },
    deb: {
        packageCategory: "net",
        depends: [
            "libgtk-3-0",
            "libnotify4",
            "libnss3",
            "libxss1",
            "libxtst6",
            "xdg-utils",
            "libatspi2.0-0",
            "libuuid1",
            "libsecret-1-0",
            "libasound2",
            "libgbm1",
        ],
        recommends: ["libsqlcipher0", "element-io-archive-keyring"],
        fpm: [
            "--deb-field",
            "Replaces: riot-desktop (<< 1.7.0), riot-web (<< 1.7.0)",
            "--deb-field",
            "Breaks: riot-desktop (<< 1.7.0), riot-web (<< 1.7.0)",
        ],
    },
    mac: {
        category: "public.app-category.social-networking",
        darkModeSupport: true,
        hardenedRuntime: true,
        gatekeeperAssess: true,
        entitlements: "./build/entitlements.mac.plist",
        icon: "build/icons/icon.icns",
    },
    win: {
        target: ["squirrel"],
        signingHashAlgorithms: ["sha256"],
        icon: "build/icons/icon.ico",
    },
    directories: {
        output: "dist",
    },
    protocols: [
        {
            name: "element",
            schemes: ["element"],
        },
    ],
};

/**
 * Allow specifying windows signing cert via env vars
 * @param {string} process.env.ED_SIGNTOOL_SUBJECT_NAME
 * @param {string} process.env.ED_SIGNTOOL_THUMBPRINT
 */
if (process.env.ED_SIGNTOOL_SUBJECT_NAME && process.env.ED_SIGNTOOL_THUMBPRINT) {
    config.win.certificateSubjectName = process.env.ED_SIGNTOOL_SUBJECT_NAME;
    config.win.certificateSha1 = process.env.ED_SIGNTOOL_THUMBPRINT;
}

/**
 * Allow specifying macOS notary team id via env var
 * @param {string} process.env.ED_NOTARYTOOL_TEAM_ID
 */
if (process.env.ED_NOTARYTOOL_TEAM_ID) {
    config.mac.notarize = {
        teamId: process.env.ED_NOTARYTOOL_TEAM_ID,
    };
}

/**
 * Allow specifying nightly version via env var
 * @param {string} process.env.ED_NIGHTLY
 */
if (process.env.ED_NIGHTLY) {
    config.deb.fpm = []; // Clear the fpm as the breaks deb fields don't apply to nightly

    config.appId = NIGHTLY_APP_ID;
    config.extraMetadata.productName += " Nightly";
    config.extraMetadata.name = NIGHTLY_APP_NAME;
    config.extraMetadata.description += " (nightly unstable build)";
    config.deb.fpm.push("--name", NIGHTLY_DEB_NAME);

    let version = process.env.ED_NIGHTLY;
    if (os.platform() === "win32") {
        // The windows packager relies on parsing this as semver, so we have to make it look like one.
        // This will give our update packages really stupid names, but we probably can't change that either
        // because squirrel windows parses them for the version too. We don't really care: nobody sees them.
        // We just give the installer a static name, so you'll just see this in the 'about' dialog.
        // Turns out if you use 0.0.0 here it makes Squirrel windows crash, so we use 0.0.1.
        version = "0.0.1-nightly." + version;
    }
    config.extraMetadata.version = version;
}

if (os.platform() === "linux") {
    // Electron crashes on debian if there's a space in the path.
    // https://github.com/vector-im/element-web/issues/13171
    config.extraMetadata.productName = config.extraMetadata.productName.replace(/ /g, "-");

    /**
     * Allow specifying deb changelog via env var
     * @param {string} process.env.ED_DEB_CHANGELOG
     */
    if (process.env.ED_DEBIAN_CHANGELOG) {
        config.deb.fpm.push(`--deb-changelog=${process.env.ED_DEBIAN_CHANGELOG}`);
    }

    if (process.env.SQLCIPHER_BUNDLED) {
        // Remove sqlcipher dependency when using bundled
        config.deb.recommends = config.deb.recommends?.filter((d) => d !== "libsqlcipher0");
    }
}

exports.default = config;
