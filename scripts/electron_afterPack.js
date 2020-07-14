const fsProm = require('fs').promises;
const path = require('path');

exports.default = async function(context) {
    const { electronPlatformName, appOutDir } = context;

    // Squirrel windows will try to relaunch the app using an executable of the same name as
    // before in the new version, so will fail if the executable is now called something else.
    // We add a fake Riot.exe that it can run which runs the real one.
    // This also gets signed automatically, presumably because electron-build just looks for all
    // exe files and signs them all...
    if (electronPlatformName === 'win32') {
        await fsProm.copyFile('build/rebrand_stub/rebrand_stub.exe', path.join(appOutDir, "Riot.exe"));
    }
};
