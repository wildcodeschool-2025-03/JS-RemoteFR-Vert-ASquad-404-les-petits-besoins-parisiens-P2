import { type ReactNode, createContext, useContext, useState } from "react";
import en from "../../Locales/en.json";
import fr from "../../Locales/fr.json";
import type { LocaleType } from "../lib/definitions";

const translations = { fr, en };

const LocaleContext = createContext<LocaleType>({
  lang: "fr",
  toggleLocale: () => undefined,
  translations: translations["fr"],
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<"fr" | "en">("fr");

  const toggleLocale = () => {
    setCurrentLanguage(currentLanguage === "fr" ? "en" : "fr");
  };

  const value = {
    lang: currentLanguage,
    toggleLocale: toggleLocale,
    translations: translations[currentLanguage],
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LocaleContext);
}
