export type LocaleType = {
  lang: "fr" | "en";
  toggleLocale: () => void;
  translations: TranslationsType;
};

export type TranslationsType = {
  homepage: {
    paragraph: string;
  };

  cardAdress: {
    textbutton: string;
  };

  cardList: {
    loading: string;
  };

  cardListDefibrillator: {
    loading: string;
  };

  cardListToilets: {
    loading: string;
  };

  CardTitle: {
    titre: string;
    paragraph: string;
  };

  DefibrillatorCard: {
    functioncite: string;
    time: string;
    available: string;
    access: string;
    view: string;
  };

  navbar: {
    Toilet: string;
    "Water fountains": string;
    shops: string;
    Defibrillators: string;
  };

  navbarDesktop: {
    Toilet: string;
    "Water fountains": string;
    shops: string;
    Defibrillators: string;
  };

  ToiletsCard: {
    time: string;
    access: string;
    baby: string;
    view: string;
  };

  fountainsCard: {
    line: string;
    view: string;
  };
};
