import { useTranslation } from "../contexts/LocaleContext";

function ButtonLanguage() {
  const { lang, toggleLocale } = useTranslation();

  return (
    <button
      type="button"
      className="languageButton
    "
      onClick={toggleLocale}
    >
      {lang === "fr" ? "🇬🇧" : "🇫🇷"}
    </button>
  );
}
export default ButtonLanguage;
