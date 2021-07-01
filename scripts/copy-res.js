#!/usr/bin/env node

// copies resources into the lib directory.

const parseArgs = require('minimist');
const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');

const argv = parseArgs(process.argv.slice(2), {});

const watch = argv.w;
const verbose = argv.v;

function errCheck(err) {
    if (err) {
        console.error(err.message);
        process.exit(1);
    }
}

const I18N_BASE_PATH = "src/i18n/strings/";
const INCLUDE_LANGS = fs.readdirSync(I18N_BASE_PATH).filter(fn => fn.endsWith(".json"));

// Ensure lib, lib/i18n and lib/i18n/strings all exist
fs.mkdirSync('lib/i18n/strings', { recursive: true });

function genLangFile(file, dest) {
    let translations = {};
    [file].forEach(function(f) {
        if (fs.existsSync(f)) {
            try {
                Object.assign(
                    translations,
                    JSON.parse(fs.readFileSync(f).toString()),
                );
            } catch (e) {
                console.error("Failed: " + f, e);
                throw e;
            }
        }
    });

    translations = weblateToCounterpart(translations);

    const json = JSON.stringify(translations, null, 4);
    const filename = path.basename(file);

    fs.writeFileSync(dest + filename, json);
    if (verbose) {
        console.log("Generated language file: " + filename);
    }
}

/*
 * Convert translation key from weblate format
 * (which only supports a single level) to counterpart
 * which requires object values for 'count' translations.
 *
 * eg.
 *     "there are %(count)s badgers|one": "a badger",
 *     "there are %(count)s badgers|other": "%(count)s badgers"
 *   becomes
 *     "there are %(count)s badgers": {
 *         "one": "a badger",
 *         "other": "%(count)s badgers"
 *     }
 */
function weblateToCounterpart(inTrs) {
    const outTrs = {};

    for (const key of Object.keys(inTrs)) {
        const keyParts = key.split('|', 2);
        if (keyParts.length === 2) {
            let obj = outTrs[keyParts[0]];
            if (obj === undefined) {
                obj = {};
                outTrs[keyParts[0]] = obj;
            }
            obj[keyParts[1]] = inTrs[key];
        } else {
            outTrs[key] = inTrs[key];
        }
    }

    return outTrs;
}

/*
 watch the input files for a given language,
 regenerate the file, and regenerating languages.json with the new filename
 */
function watchLanguage(file, dest) {
    // XXX: Use a debounce because for some reason if we read the language
    // file immediately after the FS event is received, the file contents
    // appears empty. Possibly https://github.com/nodejs/node/issues/6112
    let makeLangDebouncer;
    const makeLang = () => {
        if (makeLangDebouncer) {
            clearTimeout(makeLangDebouncer);
        }
        makeLangDebouncer = setTimeout(() => {
            genLangFile(file, dest);
        }, 500);
    };

    chokidar.watch(file)
        .on('add', makeLang)
        .on('change', makeLang)
        .on('error', errCheck);
}

// language resources
const I18N_DEST = "lib/i18n/strings/";
INCLUDE_LANGS.forEach((file) => {
    genLangFile(I18N_BASE_PATH + file, I18N_DEST);
}, {});

if (watch) {
    INCLUDE_LANGS.forEach(file => watchLanguage(I18N_BASE_PATH + file, I18N_DEST));
}
