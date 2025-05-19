import * as os from "node:os";
import * as fs from "node:fs";
import { type Configuration as BaseConfiguration, type Protocol } from "electron-builder";

/**
 * This script has different outputs depending on your os platform.
 *
 * On Windows:
 *  Prefixes the nightly version with `0.0.1-nightly.` as it breaks if it is not semver
 *  Passes $ED_SIGNTOOL_THUMBPRINT and $ED_SIGNTOOL_SUBJECT_NAME to
 *      build.win.signtoolOptions.signingHashAlgorithms and build.win.signtoolOptions.certificateSubjectName respectively if specified.
 *
 * On Linux:
 *  Replaces spaces in the product name with dashes as spaces in paths can cause issues
 *  Removes libsqlcipher0 recommended dependency if env SQLCIPHER_BUNDLED is asserted.
 *  Passes $ED_DEBIAN_CHANGELOG to build.deb.fpm if specified
 */

const DEFAULT_APP_ID = "im.riot.app";
const NIGHTLY_APP_ID = "im.riot.nightly";
const NIGHTLY_DEB_NAME = "element-nightly";

const DEFAULT_PROTOCOL_SCHEME = "io.element.desktop";
const NIGHTLY_PROTOCOL_SCHEME = "io.element.nightly";

interface Pkg {
    name: string;
    productName: string;
    description: string;
    version: string;
}

type Writable<T> = NonNullable<
    T extends Function ? T : T extends object ? { -readonly [K in keyof T]: Writable<T[K]> } : T
>;

const pkg: Pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

interface Configuration extends BaseConfiguration {
    extraMetadata: Partial<Pick<Pkg, "version">> &
        Omit<Pkg, "version"> & {
            electron_appId: string;
            electron_protocol: string;
        };
    linux: BaseConfiguration["linux"];
    win: BaseConfiguration["win"];
    mac: BaseConfiguration["mac"];
    deb: {
        fpm: string[];
    } & BaseConfiguration["deb"];
}

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config: Omit<Writable<Configuration>, "electronFuses"> & {
    // Make all fuses required to ensure they are all explicitly specified
    electronFuses: Required<Configuration["electronFuses"]>;
} = {
    appId: DEFAULT_APP_ID,
    asarUnpack: "**/*.node",
    electronFuses: {
        enableCookieEncryption: true,
        onlyLoadAppFromAsar: true,
        grantFileProtocolExtraPrivileges: false,

        runAsNode: false,
        enableNodeOptionsEnvironmentVariable: false,
        enableNodeCliInspectArguments: false,
        // We need to reset the signature if we are not signing on darwin otherwise it won't launch
        resetAdHocDarwinSignature: !process.env.APPLE_TEAM_ID,

        loadBrowserProcessSpecificV8Snapshot: false,
        enableEmbeddedAsarIntegrityValidation: true,
    },
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
        name: pkg.name,
        productName: pkg.productName,
        description: pkg.description,
        electron_appId: DEFAULT_APP_ID,
        electron_protocol: DEFAULT_PROTOCOL_SCHEME,
    },
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
        fpm: [
            "--deb-field",
            "Replaces: riot-desktop (<< 1.7.0), riot-web (<< 1.7.0)",
            "--deb-field",
            "Breaks: riot-desktop (<< 1.7.0), riot-web (<< 1.7.0)",
            "--deb-pre-depends",
            "libc6 (>= 2.31)",
        ],
    },
    mac: {
        category: "public.app-category.social-networking",
        darkModeSupport: true,
        hardenedRuntime: true,
        gatekeeperAssess: true,
        // XXX: we cannot specify this due to https://github.com/electron/osx-sign/issues/344
        // strictVerify: true,
        entitlements: "./build/entitlements.mac.plist",
        icon: "build/icons/icon.icns",
        mergeASARs: true,
        x64ArchFiles: "**/matrix-seshat/*.node", // hak already runs lipo
    },
    win: {
        target: ["squirrel", "msi"],
        signtoolOptions: {
            signingHashAlgorithms: ["sha256"],
        },
        icon: "build/icons/icon.ico",
    },
    msi: {
        perMachine: true,
    },
    directories: {
        output: "dist",
    },
    protocols: {
        name: "element",
        schemes: [DEFAULT_PROTOCOL_SCHEME, "element"],
    },
    nativeRebuilder: "sequential",
    nodeGypRebuild: false,
    npmRebuild: true,
};

/**
 * Allow specifying windows signing cert via env vars
 * @param {string} process.env.ED_SIGNTOOL_SUBJECT_NAME
 * @param {string} process.env.ED_SIGNTOOL_THUMBPRINT
 */
if (process.env.ED_SIGNTOOL_SUBJECT_NAME && process.env.ED_SIGNTOOL_THUMBPRINT) {
    config.win.signtoolOptions!.certificateSubjectName = process.env.ED_SIGNTOOL_SUBJECT_NAME;
    config.win.signtoolOptions!.certificateSha1 = process.env.ED_SIGNTOOL_THUMBPRINT;
}

/**
 * Allow specifying nightly version via env var
 * @param {string} process.env.ED_NIGHTLY
 */
if (process.env.ED_NIGHTLY) {
    config.deb.fpm = []; // Clear the fpm as the breaks deb fields don't apply to nightly

    config.appId = config.extraMetadata.electron_appId = NIGHTLY_APP_ID;
    config.extraMetadata.productName += " Nightly";
    config.extraMetadata.name += "-nightly";
    config.extraMetadata.description += " (nightly unstable build)";
    config.deb.fpm.push("--name", NIGHTLY_DEB_NAME);
    (config.protocols as Protocol).schemes[0] = config.extraMetadata.electron_protocol = NIGHTLY_PROTOCOL_SCHEME;

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

export default config;
