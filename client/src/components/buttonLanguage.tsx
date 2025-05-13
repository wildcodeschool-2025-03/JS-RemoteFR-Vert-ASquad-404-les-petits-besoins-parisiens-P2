import { useTranslation } from "../contexts/LocaleContext";
import "../assets/styles/homepage.css";

function ButtonLanguage() {
  const { lang, toggleLocale } = useTranslation();

  return (
    <button className="button-language" type="button" onClick={toggleLocale}>
      {lang === "fr" ? "EN" : "FR"}
    </button>
  );
}
export default ButtonLanguage;
