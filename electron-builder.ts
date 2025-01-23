import * as os from "node:os";
import * as fs from "node:fs";
import * as path from "node:path";
import * as plist from "plist";
import { AfterPackContext, Arch, Configuration as BaseConfiguration, Platform } from "electron-builder";
import { flipFuses, FuseV1Options, FuseVersion } from "@electron/fuses";
import { computeData } from "app-builder-lib/out/asar/integrity";
import { isElectronBased } from "app-builder-lib/out/Framework";
import { readFile, writeFile } from "node:fs/promises";
import { NtExecutable, NtExecutableResource } from "resedit";

/**
 * This script has different outputs depending on your os platform.
 *
 * On Windows:
 *  Prefixes the nightly version with `0.0.1-nightly.` as it breaks if it is not semver
 *  Passes $ED_SIGNTOOL_THUMBPRINT and $ED_SIGNTOOL_SUBJECT_NAME to
 *      build.win.signingHashAlgorithms and build.win.certificateSubjectName respectively if specified.
 *
 * On Linux:
 *  Replaces spaces in the product name with dashes as spaces in paths can cause issues
 *  Removes libsqlcipher0 recommended dependency if env SQLCIPHER_BUNDLED is asserted.
 *  Passes $ED_DEBIAN_CHANGELOG to build.deb.fpm if specified
 */

const NIGHTLY_APP_ID = "im.riot.nightly";
const NIGHTLY_DEB_NAME = "element-nightly";

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
    extraMetadata: Partial<Pick<Pkg, "version">> & Omit<Pkg, "version">;
    linux: BaseConfiguration["linux"];
    win: BaseConfiguration["win"];
    mac: BaseConfiguration["mac"];
    deb: {
        fpm: string[];
    } & BaseConfiguration["deb"];
}

async function injectAsarIntegrity(context: AfterPackContext) {
    const packager = context.packager;

    if (packager.platform === Platform.LINUX) return; // no ASAR integrity support on Linux
    if (packager.platform === Platform.MAC && context.arch !== Arch.universal) return; // We only need to generate asar on universal Mac builds

    const framework = packager.info.framework;
    const resourcesPath = packager.getResourcesDir(context.appOutDir);
    const resourcesRelativePath =
        packager.platform === Platform.MAC ? "Resources" : isElectronBased(framework) ? "resources" : "";

    const asarIntegrity = await computeData({
        resourcesPath,
        resourcesRelativePath,
    });

    if (packager.platform === Platform.WINDOWS) {
        const executablePath = path.join(context.appOutDir, `${packager.appInfo.productFilename}.exe`);

        const buffer = await readFile(executablePath);
        const executable = NtExecutable.from(buffer);
        const resource = NtExecutableResource.from(executable);

        const integrityList = Array.from(Object.entries(asarIntegrity)).map(
            ([file, { algorithm: alg, hash: value }]) => ({
                file: path.win32.normalize(file),
                alg,
                value,
            }),
        );

        // We edit the resource that electron-builder already wrote to ensure it includes all asar files
        const electronAsarResource = resource.entries.find((entry) => entry.id === "ELECTRONASAR")!;
        electronAsarResource.bin = Buffer.from(JSON.stringify(integrityList));

        resource.outputResource(executable);

        await writeFile(executablePath, Buffer.from(executable.generate()));
    } else if (packager.platform === Platform.MAC) {
        const plistPath = path.join(resourcesPath, "..", "Info.plist");
        const data = plist.parse(await readFile(plistPath, "utf8")) as unknown as Writable<plist.PlistObject>;
        data["ElectronAsarIntegrity"] = asarIntegrity as unknown as Writable<plist.PlistValue>;
        await writeFile(plistPath, plist.build(data));
    }
}

async function setFuses(context: AfterPackContext) {
    if (context.electronPlatformName !== "darwin" || context.arch === Arch.universal) {
        // Burn in electron fuses for proactive security hardening.
        // On macOS, we only do this for the universal package, as the constituent arm64 and amd64 packages are embedded within.
        const ext = (<Record<string, string>>{
            darwin: ".app",
            win32: ".exe",
            linux: "",
        })[context.electronPlatformName];

        let executableName = context.packager.appInfo.productFilename;
        if (context.electronPlatformName === "linux") {
            // Linux uses the package name as the executable name
            executableName = context.packager.appInfo.name;
        }

        const electronBinaryPath = path.join(context.appOutDir, `${executableName}${ext}`);
        console.log(`Flipping fuses for: ${electronBinaryPath}`);

        await flipFuses(electronBinaryPath, {
            version: FuseVersion.V1,
            resetAdHocDarwinSignature: context.electronPlatformName === "darwin" && context.arch === Arch.universal,

            [FuseV1Options.EnableCookieEncryption]: true,
            [FuseV1Options.OnlyLoadAppFromAsar]: true,

            [FuseV1Options.RunAsNode]: false,
            [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
            [FuseV1Options.EnableNodeCliInspectArguments]: false,

            // Mac app crashes on arm for us when `LoadBrowserProcessSpecificV8Snapshot` is enabled
            [FuseV1Options.LoadBrowserProcessSpecificV8Snapshot]: false,
            // https://github.com/electron/fuses/issues/7
            [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: false,
        });
}

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config: Omit<Writable<Configuration>, "electronFuses"> & {
    // Make all fuses required to ensure they are all explicitly specified
    // electronFuses: Required<Configuration["electronFuses"]>;
} = {
    appId: "im.riot.app",
    asarUnpack: "**/*.node",
    // XXX: Currently broken due to https://github.com/electron-userland/electron-builder/issues/8798
    // electronFuses: {
    //     enableCookieEncryption: true,
    //     onlyLoadAppFromAsar: true,
    //     grantFileProtocolExtraPrivileges: true,
    //
    //     runAsNode: false,
    //     enableNodeOptionsEnvironmentVariable: false,
    //     enableNodeCliInspectArguments: false,
    //     // We need to reset the signature if we are not signing on darwin otherwise it won't launch
    //     resetAdHocDarwinSignature: !process.env.APPLE_TEAM_ID,
    //
    //     // Mac app crashes on arm for us when `LoadBrowserProcessSpecificV8Snapshot` is enabled
    //     loadBrowserProcessSpecificV8Snapshot: false,
    //     enableEmbeddedAsarIntegrityValidation: true,
    // },
    afterPack: async (context: AfterPackContext) => {
        await injectAsarIntegrity(context);
        await setFuses(context);
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
        strictVerify: true,
        entitlements: "./build/entitlements.mac.plist",
        icon: "build/icons/icon.icns",
        mergeASARs: true,
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
    protocols: [
        {
            name: "element",
            schemes: ["io.element.desktop", "element"],
        },
    ],
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

    config.appId = NIGHTLY_APP_ID;
    config.extraMetadata.productName += " Nightly";
    config.extraMetadata.name += "-nightly";
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

export default config;
