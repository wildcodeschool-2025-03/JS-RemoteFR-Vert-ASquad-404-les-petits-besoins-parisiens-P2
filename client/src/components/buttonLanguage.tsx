import { useTranslation } from "../contexts/LocaleContext";

function ButtonLanguage() {
  const { lang, toggleLocale } = useTranslation();

  return (
    <button type="button" onClick={toggleLocale}>
      {lang === "fr" ? "English" : "français"}
    </button>
  );
}
export default ButtonLanguage;
