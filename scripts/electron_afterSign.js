const { notarize } = require("@electron/notarize");

let warned = false;
exports.default = async function (context) {
    const { electronPlatformName, appOutDir } = context;
    const appId = context.packager.info.appInfo.id;

    if (electronPlatformName === "darwin") {
        const appName = context.packager.appInfo.productFilename;

        const notarizeToolCredentials = {};
        if (process.env.NOTARIZE_KEYCHAIN_PROFILE) {
            notarizeToolCredentials.keychainProfile = process.env.NOTARIZE_KEYCHAIN_PROFILE;
            notarizeToolCredentials.keychain = process.env.NOTARIZE_KEYCHAIN;
        } else if (process.env.NOTARIZE_APPLE_ID && process.env.NOTARIZE_APPLE_ID_PASSWORD && process.env.NOTARIZE_TEAM_ID) {
            notarizeToolCredentials.appleId = process.env.NOTARIZE_APPLE_ID;
            notarizeToolCredentials.appleIdPassword = process.env.NOTARIZE_APPLE_ID_PASSWORD;
            notarizeToolCredentials.teamId = process.env.NOTARIZE_TEAM_ID;
        } else {
            if (!warned) {
                console.log("*****************************************");
                console.log("*   This build will NOT be notarised.   *");
                console.log("* Provide NOTARIZE_KEYCHAIN_PROFILE or  *");
                console.log("* NOTARIZE_APPLE_ID, NOTARIZE_TEAM_ID   *");
                console.log("* and NOTARIZE_APPLE_ID_PASSWORD        *");
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
            ...notarizeToolCredentials,
        });
    }
};
