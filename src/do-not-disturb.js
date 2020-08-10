
// Always false if the platform doesn't support it.
global.isDoNotDisturb = false;

const LINUX_SETTING_COMMAND = "gsettings get org.gnome.desktop.notifications show-banners";

function init() {
    if (process.platform === "linux") {
        return initForLinux();
    }
}

async function initForLinux() {
    // TODO: This is specific to the GNOME desktop implementation of DND

    const DBus = require('dbus-next');
    const { execSync } = require('child_process');
    // First we need to determine the value of dnd.
    try {
        // XXX: After much flailing about, I couldn't find another acceptable way to fetch this setting value.
        const value = execSync(LINUX_SETTING_COMMAND, { encoding: "utf-8" }).trim();
        if (value) {
            // Anything other than true will be safely false.
            // Invert because show-banners === do-disturb :)
            global.isDoNotDisturb = value !== 'true';
            console.log(`do-not-disturb value has been detected as: ${global.isDoNotDisturb}`);
        }
    } catch (ex) {
        console.warn("Could not execute gsettings command to determine do-not-disturb value. Functionality disabled");
        console.debug(ex.message);
        return;
    }


    const session = DBus.sessionBus();
    process.on("exit", () => {
        session.disconnect();
    });
    const obj = await session.getProxyObject('ca.desrt.dconf', '/ca/desrt/dconf/Writer/user');
    const signaller = obj.getInterface('ca.desrt.dconf.Writer');
    signaller.on('Notify', (settingName) => {
        if (settingName == '/org/gnome/desktop/notifications/show-banners') {
            // The D-BUS signal will only tell you that the setting changed, but annoyingly
            // not the value. Since we got the value on startup, assume it's just been toggled.
            global.isDoNotDisturb = !global.isDoNotDisturb;
            console.log(`do-not-disturb value has been detected as: ${global.isDoNotDisturb}`);
        }
    });
}

module.exports = {
    init,
};
