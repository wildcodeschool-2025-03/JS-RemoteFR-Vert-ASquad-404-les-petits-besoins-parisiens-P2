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
    Toilet: string;
    Waterfountains: string;
    shops: string;
    Defibrillators: string;
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
    Waterfountains: string;
    shops: string;
    Defibrillators: string;
  };

  navbarDesktop: {
    Toilet: string;
    Waterfountains: string;
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

  shopCard: {
    view: string;
    closedOn: string;
  };
};
