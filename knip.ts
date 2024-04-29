import { KnipConfig } from "knip";

export default {
    entry: ["src/electron-main.ts", "src/preload.ts", "electron-builder.ts", ".eslintrc-*.js", "scripts/**", "hak/**"],
    project: ["**/*.{js,ts}"],
    ignoreDependencies: [
        // Brought in via hak scripts
        "keytar",
        "matrix-seshat",
        // Needed by `electron-builder`
        "electron-builder-squirrel-windows",
        "@types/yargs",
        // Required for `action-validator`
        "@action-validator/*",
    ],
    ignoreBinaries: ["jq", "scripts/in-docker.sh"],
} satisfies KnipConfig;
