module.exports = {
    plugins: ["matrix-org"],
    extends: ["plugin:matrix-org/javascript"],
    parserOptions: {
        ecmaVersion: 2021,
        project: ["tsconfig.json"],
    },
    env: {
        es6: true,
        node: true,
        // we also have some browser code (ie. the preload script)
        browser: true,
    },
    // NOTE: These rules are frozen and new rules should not be added here.
    // New changes belong in https://github.com/matrix-org/eslint-plugin-matrix-org/
    rules: {
        "quotes": "off",
        "indent": "off",
        "prefer-promise-reject-errors": "off",
        "no-async-promise-executor": "off",
    },
    overrides: [
        {
            files: ["src/**/*.ts"],
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
