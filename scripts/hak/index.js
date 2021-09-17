/*
Copyright 2020-2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const path = require('path');

const findNpmPrefix = require('find-npm-prefix');

const HakEnv = require('./hakEnv');

const GENERALCOMMANDS = [
    'target',
];

// These can only be run on specific modules
const MODULECOMMANDS = [
    'check',
    'fetch',
    'link',
    'fetchDeps',
    'build',
    'copy',
    'clean',
];

// Shortcuts for multiple commands at once (useful for building universal binaries
// because you can run the fetch/fetchDeps/build for each arch and then copy/link once)
const METACOMMANDS = {
    'fetchandbuild': ['check', 'fetch', 'fetchDeps', 'build'],
    'copyandlink': ['copy', 'link'],
};

// Scripts valid in a hak.json 'scripts' section
const HAKSCRIPTS = [
    'check',
    'fetch',
    'fetchDeps',
    'build',
];

async function main() {
    const prefix = await findNpmPrefix(process.cwd());
    let packageJson;
    try {
        packageJson = require(path.join(prefix, "package.json"));
    } catch (e) {
        console.error("Can't find a package.json!");
        process.exit(1);
    }

    const targetIds = [];
    // Apply `--target <target>` option if specified
    // Can be specified multiple times for the copy command to bundle
    // multiple archs into a single universal output module)
    while (true) { // eslint-disable-line no-constant-condition
        const targetIndex = process.argv.indexOf('--target');
        if (targetIndex === -1) break;

        if ((targetIndex + 1) >= process.argv.length) {
            console.error("--target option specified without a target");
            process.exit(1);
        }
        // Extract target ID and remove from args
        targetIds.push(process.argv.splice(targetIndex, 2)[1]);
    }

    const hakEnvs = targetIds.map(tid => new HakEnv(prefix, packageJson, tid));
    if (hakEnvs.length == 0) hakEnvs.push(new HakEnv(prefix, packageJson, null));
    const hakEnv = hakEnvs[0];

    const deps = {};

    const hakDepsCfg = packageJson.hakDependencies || {};

    for (const dep of Object.keys(hakDepsCfg)) {
        const hakJsonPath = path.join(prefix, 'hak', dep, 'hak.json');
        let hakJson;
        try {
            hakJson = await require(hakJsonPath);
        } catch (e) {
            console.error("No hak.json found for " + dep + ".");
            console.log("Expecting " + hakJsonPath);
            process.exit(1);
        }
        deps[dep] = {
            name: dep,
            version: hakDepsCfg[dep],
            cfg: hakJson,
            moduleHakDir: path.join(prefix, 'hak', dep),
            moduleDotHakDir: path.join(hakEnv.dotHakDir, dep),
            moduleTargetDotHakDir: path.join(hakEnv.dotHakDir, dep, hakEnv.getTargetId()),
            moduleBuildDir: path.join(hakEnv.dotHakDir, dep, hakEnv.getTargetId(), 'build'),
            moduleBuildDirs: hakEnvs.map(h => path.join(h.dotHakDir, dep, h.getTargetId(), 'build')),
            moduleOutDir: path.join(hakEnv.dotHakDir, 'hakModules', dep),
            nodeModuleBinDir: path.join(hakEnv.dotHakDir, dep, hakEnv.getTargetId(), 'build', 'node_modules', '.bin'),
            depPrefix: path.join(hakEnv.dotHakDir, dep, hakEnv.getTargetId(), 'opt'),
            scripts: {},
        };

        for (const s of HAKSCRIPTS) {
            if (hakJson.scripts && hakJson.scripts[s]) {
                deps[dep].scripts[s] = require(path.join(prefix, 'hak', dep, hakJson.scripts[s]));
            }
        }
    }

    let cmds;
    if (process.argv.length < 3) {
        cmds = ['check', 'fetch', 'fetchDeps', 'build', 'copy', 'link'];
    } else if (METACOMMANDS[process.argv[2]]) {
        cmds = METACOMMANDS[process.argv[2]];
    } else {
        cmds = [process.argv[2]];
    }

    if (hakEnvs.length > 1 && cmds.some(c => !['copy', 'link'].includes(c))) {
        // We allow link here too for convenience because it's completely arch independent
        console.error("Multiple targets only supported with the copy command");
        return;
    }

    let modules = process.argv.slice(3);
    if (modules.length === 0) modules = Object.keys(deps);

    for (const cmd of cmds) {
        if (GENERALCOMMANDS.includes(cmd)) {
            if (cmd === 'target') {
                console.log(hakEnv.getNodeTriple());
            }
            return;
        }

        if (!MODULECOMMANDS.includes(cmd)) {
            console.error("Unknown command: " + cmd);
            console.log("Commands I know about:");
            for (const cmd of MODULECOMMANDS) {
                console.log("\t" + cmd);
            }
            process.exit(1);
        }

        const cmdFunc = require('./' + cmd);

        for (const mod of modules) {
            const depInfo = deps[mod];
            if (depInfo === undefined) {
                console.log(
                    "Module " + mod + " not found - is it in hakDependencies " +
                    "in your package.json?",
                );
                process.exit(1);
            }
            console.log("hak " + cmd + ": " + mod);
            await cmdFunc(hakEnv, depInfo);
        }
    }
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
