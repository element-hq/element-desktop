const jsSdkEslintCfg = require('matrix-js-sdk/.eslintrc');

module.exports = {
    parserOptions: {
        ecmaVersion: 8,
    },
    env: {
        node: true,
        // we also have some browser code (ie. the preload script)
        browser: true,
    },
    extends: ["eslint:recommended", "google"],
    rules: jsSdkEslintCfg.rules,
}

// js-sdk uses a babel rule which we can't use because we
// don't use babel, so remove it & put the original back
delete module.exports.rules["babel/no-invalid-this"];
module.exports.rules["no-invalid-this"] = "error";
