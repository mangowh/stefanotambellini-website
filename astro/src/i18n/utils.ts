import {
  defaultLanguage,
  strings,
  supportedLanguages,
  type languages,
  type tSupportedLanguages,
} from "./messages";

export function getLanguage() {
  const locale = new Intl.Locale(window.navigator.language);

  let lang = locale.language;

  if (!(lang in supportedLanguages)) {
    lang = defaultLanguage;
  }

  return lang as tSupportedLanguages;
}

export function useTranslations(lang: tSupportedLanguages) {
  return function t(key: keyof typeof languages) {
    return strings[key][lang] || strings[defaultLanguage][key];
  };
}

export function translate(lang: tSupportedLanguages, msg: string) {
  return strings[msg][lang];
}
