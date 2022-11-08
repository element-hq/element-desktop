const { notarize } = require('@electron/notarize');

let warned = false;
exports.default = async function(context) {
    const { electronPlatformName, appOutDir } = context;
    const appId = context.packager.info.appInfo.id;

    if (electronPlatformName === 'darwin') {
        const appName = context.packager.appInfo.productFilename;

        const keychainProfile = process.env.NOTARIZE_KEYCHAIN_PROFILE;
        if (keychainProfile === undefined) {
            if (!warned) {
                console.log("*****************************************");
                console.log("* NOTARIZE_KEYCHAIN_PROFILE is not set. *");
                console.log("*   This build will NOT be notarised.   *");
                console.log("*****************************************");
                warned = true;
            }
            return;
        }

        console.log("Notarising macOS app. This may be some time.");
        return await notarize({
            tool: "notarytool",
            appBundleId: appId,
            appPath: `${appOutDir}/${appName}.app`,
            keychainProfile,
            keychain: process.env.NOTARIZE_KEYCHAIN,
        });
    }
};
