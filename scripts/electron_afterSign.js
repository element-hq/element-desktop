const { notarize } = require('electron-notarize');

let warned = false;
exports.default = async function(context) {
    const { electronPlatformName, appOutDir } = context;
    const appId = context.packager.info.appInfo.id;

    if (electronPlatformName === 'darwin') {
        const appName = context.packager.appInfo.productFilename;
        // We get the password from keychain. The keychain stores
        // user IDs too, but apparently altool can't get the user ID
        // from the keychain, so we need to get it from the environment.
        const userId = process.env.NOTARIZE_APPLE_ID;
        if (userId === undefined) {
            if (!warned) {
                console.log("*************************************");
                console.log("*   NOTARIZE_APPLE_ID is not set.   *");
                console.log("* This build will NOT be notarised. *");
                console.log("*************************************");
                warned = true;
            }
            return;
        }

        console.log("Notarising macOS app. This may be some time.");
        return await notarize({
            appBundleId: appId,
            appPath: `${appOutDir}/${appName}.app`,
            appleId: userId,
            appleIdPassword: '@keychain:NOTARIZE_CREDS',
        });
    }
};
