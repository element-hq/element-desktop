const fsProm = require('fs').promises;
const path = require('path');
const { getElectronVersion } = "app-builder-lib/out/electron/electronVersion";

exports.default = async function(context) {
    const { electronPlatformName, arch, packager, appOutDir } = context;

    if (process.env["ELEMENT_BUILD_FREE_FFMPEG"]) {
        const electronVersion = await getElectronVersion(packager.projectDir);
        await new Promise(resolve => {
            require("electron-packager-plugin-non-proprietary-codecs-ffmpeg")(
                appOutDir,
                electronVersion,
                electronPlatformName,
                arch,
                resolve,
            );
        });
    }

    // Squirrel windows will try to relaunch the app using an executable of the same name as
    // before in the new version, so will fail if the executable is now called something else.
    // We add a fake Riot.exe that it can run which runs the real one.
    // This also gets signed automatically, presumably because electron-build just looks for all
    // exe files and signs them all...
    if (electronPlatformName === 'win32') {
        await fsProm.copyFile('build/rebrand_stub/rebrand_stub.exe', path.join(appOutDir, "Riot.exe"));
    }
};
