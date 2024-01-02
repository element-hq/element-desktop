import { build, type Configuration, Platform } from "electron-builder";

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const options: Configuration = {
    appId: "im.riot.app",
    asarUnpack: "**/*.node",
    afterPack: "scripts/afterPack.ts",
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
    linux: {
        target: ["tar.gz", "deb"],
        category: "Network;InstantMessaging;Chat",
        maintainer: "support@element.io",
        icon: "build/icons",
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

// Promise is returned
build({
    targets: Platform.MAC.createTarget(),
    config: options,
})
    .then((result) => {
        console.log(JSON.stringify(result));
    })
    .catch((error) => {
        console.error(error);
    });
