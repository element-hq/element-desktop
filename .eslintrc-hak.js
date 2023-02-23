module.exports = {
    plugins: ["matrix-org"],
    extends: [".eslintrc.js"],
    parserOptions: {
        project: ["hak/tsconfig.json"],
    },
    overrides: [
        {
            files: ["hak/**/*.ts"],
            extends: ["plugin:matrix-org/typescript"],
            rules: {
                // Things we do that break the ideal style
                "prefer-promise-reject-errors": "off",
                "quotes": "off",

                "@typescript-eslint/no-explicit-any": "off",
                // We're okay with assertion errors when we ask for them
                "@typescript-eslint/no-non-null-assertion": "off",
            },
        },
    ],
};
