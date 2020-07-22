module.exports = {
    parserOptions: {
        ecmaVersion: 8,
    },
    env: {
        es6: true,
        node: true,
        // we also have some browser code (ie. the preload script)
        browser: true,
    },
    extends: ["matrix-org"],
    rules: {
        // js-sdk uses a babel rule which we can't use because we
        // don't use babel, so remove it & put the original back
        "babel/no-invalid-this": "off",
        "no-invalid-this": "error",
        "quotes": "off",
        "indent": "off",
        "prefer-promise-reject-errors": "off",
        "no-async-promise-executor": "off",
    }
}
