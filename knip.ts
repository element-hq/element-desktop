import { KnipConfig } from "knip";

export default {
    entry: ["src/preload.cts", "electron-builder.ts", "scripts/**", "hak/**"],
    project: ["**/*.{js,ts}"],
    ignoreDependencies: [
        // Brought in via hak scripts
        "matrix-seshat",
        // Native optional dependency for Linux audio sharing
        "@vencord/venmic",
        // Required for `action-validator`
        "@action-validator/*",
        // Used for git pre-commit hooks
        "husky",
        // Required for `patch-package`
        "postinstall-postinstall",
    ],
    ignoreBinaries: ["jq", "scripts/in-docker.sh"],
} satisfies KnipConfig;
