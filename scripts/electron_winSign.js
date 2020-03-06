const { execFile } = require('child_process');
const path = require('path');

// Loosely based on computeSignToolArgs from app-builder-lib/src/codeSign/windowsCodeSign.ts
function computeSignToolArgs(options, keyContainer, inputFile) {
    const args = [];

    if (process.env.ELECTRON_BUILDER_OFFLINE !== "true") {
      const timestampingServiceUrl = options.timeStampServer || "http://timestamp.digicert.com";
      args.push(options.isNest || options.hash === "sha256" ? "/tr" : "/t", options.isNest || options.hash === "sha256" ? (options.options.rfc3161TimeStampServer || "http://timestamp.comodoca.com/rfc3161") : timestampingServiceUrl);
    }
 
    // We simplify and just specify the certificate subject name for our purposes
    args.push('/n', options.certificateSubjectName);
    args.push('/kc', keyContainer);

    if (options.hash !== "sha1") {
        args.push("/fd", options.hash)
        if (process.env.ELECTRON_BUILDER_OFFLINE !== "true") {
            args.push("/td", "sha256")
        }
    }
 
    // msi does not support dual-signing
    if (options.isNest) {
      args.push("/as")
    }
 
    // https://github.com/electron-userland/electron-builder/issues/2875#issuecomment-387233610
    args.push("/debug")
    // must be last argument
    args.push(inputFile)
}

exports.default = async function(cfg) {
    const keyContainer = process.env.SIGNING_KEY_CONTAINER;
    if (keyContainer === undefined) {
        console.warn(
            "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n" +
            "! Skipping Windows signing.          !\n" +
            "! SIGNING_KEY_CONTAINER not defined. !\n" +
            "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
        );
        return;
    }

    const inPath = cfg.path;
    const appOutDir = path.dirname(inPath);

    return new Promise((resolve, reject) => {
        const args = ['sign'].concat(computeSignToolArgs(cfg.options, keyContainer, cfg.path));
        
        console.log("Running signtool with args", args);
        execFile('signtool', args, {}, (error, stdout) => {
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
