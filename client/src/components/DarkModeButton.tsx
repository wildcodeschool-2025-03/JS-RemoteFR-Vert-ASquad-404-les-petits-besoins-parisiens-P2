import { TbSunMoon } from "react-icons/tb";
import { useDarkMode } from "../contexts/ThemeContext";
import "../assets/styles/darkModeButton.css";

export default function DarkModeButton() {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <button
      className="buttonDark buttonLight"
      onClick={toggleTheme}
      type="button"
    >
      {theme === "dark" ? <TbSunMoon /> : <TbSunMoon />}
    </button>
  );
}
