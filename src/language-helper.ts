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
import { TranslationKey as TKey } from "matrix-web-i18n";

import type Store from "electron-store";
import type EN from "./i18n/strings/en_EN.json";

const FALLBACK_LOCALE = "en";

type TranslationKey = TKey<typeof EN>;

export function _td(text: TranslationKey): TranslationKey {
    return text;
}

type SubstitutionValue = number | string;

interface Variables {
    [key: string]: SubstitutionValue | undefined;
    count?: number;
}

export function _t(text: TranslationKey, variables: Variables = {}): string {
    const { count } = variables;

    // Horrible hack to avoid https://github.com/vector-im/element-web/issues/4191
    // The interpolation library that counterpart uses does not support undefined/null
    // values and instead will throw an error. This is a problem since everywhere else
    // in JS land passing undefined/null will simply stringify instead, and when converting
    // valid ES6 template strings to i18n strings it's extremely easy to pass undefined/null
    // if there are no existing null guards. To avoid this making the app completely inoperable,
    // we'll check all the values for undefined/null and stringify them here.
    Object.keys(variables).forEach((key) => {
        if (variables[key] === undefined) {
            console.warn("safeCounterpartTranslate called with undefined interpolation name: " + key);
            variables[key] = "undefined";
        }
        if (variables[key] === null) {
            console.warn("safeCounterpartTranslate called with null interpolation name: " + key);
            variables[key] = "null";
        }
    });
    let translated = counterpart.translate(text, variables);
    if (!translated && count !== undefined) {
        // counterpart does not do fallback if no pluralisation exists in the preferred language, so do it here
        translated = counterpart.translate(text, { ...variables, locale: FALLBACK_LOCALE });
    }

    // The translation returns text so there's no XSS vector here (no unsafe HTML, no code execution)
    return translated;
}

type Component = () => void;

type TypedStore = Store<{ locale?: string | string[] }>;

export class AppLocalization {
    private static readonly STORE_KEY = "locale";

    private readonly store: TypedStore;
    private readonly localizedComponents?: Set<Component>;

    public constructor({ store, components = [] }: { store: TypedStore; components: Component[] }) {
        counterpart.registerTranslations(FALLBACK_LOCALE, this.fetchTranslationJson("en_EN"));
        counterpart.setFallbackLocale(FALLBACK_LOCALE);
        counterpart.setSeparator("|");

        if (Array.isArray(components)) {
            this.localizedComponents = new Set(components);
        }

        this.store = store;
        if (this.store.has(AppLocalization.STORE_KEY)) {
            const locales = this.store.get(AppLocalization.STORE_KEY);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.setAppLocale(locales!);
        }

        this.resetLocalizedUI();
    }

    // Format language strings from normalized form to non-normalized form (e.g. en-gb to en_GB)
    private denormalize(locale: string): string {
        if (locale === "en") {
            locale = "en_EN";
        }
        const parts = locale.split("-");
        if (parts.length > 1) {
            parts[1] = parts[1].toUpperCase();
        }
        return parts.join("_");
    }

    public fetchTranslationJson(locale: string): Record<string, string> {
        try {
            console.log("Fetching translation json for locale: " + locale);
            return require(`./i18n/strings/${this.denormalize(locale)}.json`);
        } catch (e) {
            console.log(`Could not fetch translation json for locale: '${locale}'`, e);
            return {};
        }
    }

    public setAppLocale(locales: string | string[]): void {
        console.log(`Changing application language to ${locales}`);

        if (!Array.isArray(locales)) {
            locales = [locales];
        }

        const loadedLocales = locales.filter((locale) => {
            const translations = this.fetchTranslationJson(locale);
            if (translations !== null) {
                counterpart.registerTranslations(locale, translations);
            }
            return !!translations;
        });

        counterpart.setLocale(loadedLocales[0]);
        this.store.set(AppLocalization.STORE_KEY, locales);

        this.resetLocalizedUI();
    }

    public resetLocalizedUI(): void {
        console.log("Resetting the UI components after locale change");
        this.localizedComponents?.forEach((componentSetup) => {
            if (typeof componentSetup === "function") {
                componentSetup();
            }
        });
    }
}
