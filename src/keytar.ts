import type * as Keytar from "keytar"; // Hak dependency type

let keytar: typeof Keytar | undefined;
try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    keytar = require('keytar');
} catch (e) {
    if (e.code === "MODULE_NOT_FOUND") {
        console.log("Keytar isn't installed; secure key storage is disabled.");
    } else {
        console.warn("Keytar unexpected error:", e);
    }
}

export { keytar };
