export const supportedLanguages = ["it", "en"] as const;
export type tSupportedLanguages = typeof supportedLanguages[number];

export const defaultLanguage: tSupportedLanguages = "en";

export const languages: { [key in tSupportedLanguages]: string } = {
  en: "English",
  it: "Italiano",
} as const;

export const strings: {
  [key: string]: { [key in tSupportedLanguages]: string };
} = {
  ciaoSono: {
    it: "Ciao, Sono",
    en: "Hi, I am",
  },
  presentazione: {
    it: "Software developer e web designer",
    en: "Software developer & web designer",
  },
  contattamiA: {
    it: "Contattami a",
    en: "Contact me at",
  },
  puoiAncheSeguirmiA: {
    it: "Seguimi su",
    en: "Follow me at",
  },
};
