/*
Copyright 2021 New Vector Ltd

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

import counterpart from "counterpart";
import type Store from 'electron-store';

const DEFAULT_LOCALE = "en";

export function _td(text: string): string {
    return text;
}

type SubstitutionValue = number | string;

interface IVariables {
    [key: string]: SubstitutionValue;
    count?: number;
}

export function _t(text: string, variables: IVariables = {}): string {
    const args = Object.assign({ interpolate: false }, variables);

    const { count } = args;

    // Horrible hack to avoid https://github.com/vector-im/element-web/issues/4191
    // The interpolation library that counterpart uses does not support undefined/null
    // values and instead will throw an error. This is a problem since everywhere else
    // in JS land passing undefined/null will simply stringify instead, and when converting
    // valid ES6 template strings to i18n strings it's extremely easy to pass undefined/null
    // if there are no existing null guards. To avoid this making the app completely inoperable,
    // we'll check all the values for undefined/null and stringify them here.
    Object.keys(args).forEach((key) => {
        if (args[key] === undefined) {
            console.warn("safeCounterpartTranslate called with undefined interpolation name: " + key);
            args[key] = 'undefined';
        }
        if (args[key] === null) {
            console.warn("safeCounterpartTranslate called with null interpolation name: " + key);
            args[key] = 'null';
        }
    });
    let translated = counterpart.translate(text, args);
    if (translated === undefined && count !== undefined) {
        // counterpart does not do fallback if no pluralisation exists
        // in the preferred language, so do it here
        translated = counterpart.translate(text, Object.assign({}, args, { locale: DEFAULT_LOCALE }));
    }

    // The translation returns text so there's no XSS vector here (no unsafe HTML, no code execution)
    return translated;
}

type Component = () => void;

type TypedStore = Store<{ locale?: string | string[] }>;

export class AppLocalization {
    private static readonly STORE_KEY = "locale";

    private readonly store: TypedStore;
    private readonly localizedComponents: Set<Component>;

    constructor({ store, components = [] }: { store: TypedStore, components: Component[] }) {
        counterpart.registerTranslations("en", this.fetchTranslationJson("en_EN"));
        counterpart.setFallbackLocale('en');
        counterpart.setSeparator('|');

        if (Array.isArray(components)) {
            this.localizedComponents = new Set(components);
        }

        this.store = store;
        if (this.store.has(AppLocalization.STORE_KEY)) {
            const locales = this.store.get(AppLocalization.STORE_KEY);
            this.setAppLocale(locales);
        }

        this.resetLocalizedUI();
    }

    public fetchTranslationJson(locale: string): Record<string, string> {
        try {
            console.log("Fetching translation json for locale: " + locale);
            return require(`./i18n/strings/${locale}.json`);
        } catch (e) {
            console.log(`Could not fetch translation json for locale: '${locale}'`, e);
            return null;
        }
    }

    public setAppLocale(locales: string | string[]): void {
        console.log(`Changing application language to ${locales}`);

        if (!Array.isArray(locales)) {
            locales = [locales];
        }

        locales.forEach(locale => {
            const translations = this.fetchTranslationJson(locale);
            if (translations !== null) {
                counterpart.registerTranslations(locale, translations);
            }
        });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - this looks like a bug but is out of scope for this conversion
        counterpart.setLocale(locales);
        this.store.set(AppLocalization.STORE_KEY, locales);

        this.resetLocalizedUI();
    }

    public resetLocalizedUI(): void {
        console.log("Resetting the UI components after locale change");
        this.localizedComponents.forEach(componentSetup => {
            if (typeof componentSetup === "function") {
                componentSetup();
            }
        });
    }
}
