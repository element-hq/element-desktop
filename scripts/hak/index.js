/*
Copyright 2020 The Matrix.org Foundation C.I.C.

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

    const hakEnv = new HakEnv(prefix, packageJson);

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
            moduleBuildDir: path.join(hakEnv.dotHakDir, dep, 'build'),
            moduleOutDir: path.join(hakEnv.dotHakDir, 'hakModules', dep),
            nodeModuleBinDir: path.join(hakEnv.dotHakDir, dep, 'build', 'node_modules', '.bin'),
            depPrefix: path.join(hakEnv.dotHakDir, dep, 'opt'),
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
    } else {
        cmds = [process.argv[2]];
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

main().catch(() => process.exit(1));
