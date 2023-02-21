const { execFile } = require("child_process");

// Loosely based on computeSignToolArgs from app-builder-lib/src/codeSign/windowsCodeSign.ts
function computeSignToolArgs(options, keyContainer) {
    const args = [];

    if (process.env.ELECTRON_BUILDER_OFFLINE !== "true") {
        const timestampingServiceUrl = options.options.timeStampServer || "http://timestamp.digicert.com";
        args.push(
            options.isNest || options.hash === "sha256" ? "/tr" : "/t",
            options.isNest || options.hash === "sha256"
                ? options.options.rfc3161TimeStampServer || "http://timestamp.comodoca.com/rfc3161"
                : timestampingServiceUrl,
        );
    }

    args.push("/kc", keyContainer);
    // To use the hardware token (this should probably be less hardcoded)
    args.push("/csp", "eToken Base Cryptographic Provider");
    // The certificate file. Somehow this appears to be the only way to specify
    // the cert that works. If you specify the subject name or hash, it will
    // say it can't associate the private key to the certificate.
    // TODO: Find a way to pass this through from the electron-builder config
    // so we don't have to hard-code this here
    // fwiw https://stackoverflow.com/questions/17927895/automate-extended-validation-ev-code-signing
    // is about the most useful resource on automating code signing...
    args.push("/f", "element.io\\New_Vector_Ltd.pem");

    if (options.hash !== "sha1") {
        args.push("/fd", options.hash);
        if (process.env.ELECTRON_BUILDER_OFFLINE !== "true") {
            args.push("/td", "sha256");
        }
    }

    // msi does not support dual-signing
    if (options.isNest) {
        args.push("/as");
    }

    // https://github.com/electron-userland/electron-builder/issues/2875#issuecomment-387233610
    args.push("/debug");
    // must be last argument
    args.push(options.path);

    return args;
}

let warned = false;
exports.default = async function (options) {
    const keyContainer = process.env.SIGNING_KEY_CONTAINER;
    if (keyContainer === undefined) {
        if (!warned) {
            console.warn(
                "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n" +
                    "! Skipping Windows signing.          !\n" +
                    "! SIGNING_KEY_CONTAINER not defined. !\n" +
                    "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
            );
            warned = true;
        }
        return;
    }

    return new Promise((resolve, reject) => {
        const args = ["sign"].concat(computeSignToolArgs(options, keyContainer));

        execFile("signtool", args, {}, (error, stdout) => {
            if (error) {
                console.error("signtool failed with code " + error);
                reject("signtool failed with code " + error);
                console.log(stdout);
            } else {
                resolve();
            }
        });
    });
};
