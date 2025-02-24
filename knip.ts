import { KnipConfig } from "knip";

export default {
    entry: ["src/electron-main.ts", "src/preload.ts", "electron-builder.ts", ".eslintrc-*.js", "scripts/**", "hak/**"],
    project: ["**/*.{js,ts}"],
    ignoreDependencies: [
        // Brought in via hak scripts
        "keytar",
        "matrix-seshat",
        // Required for `action-validator`
        "@action-validator/*",
        // Used for git pre-commit hooks
        "husky",
    ],
    ignoreBinaries: ["jq", "scripts/in-docker.sh"],
} satisfies KnipConfig;
