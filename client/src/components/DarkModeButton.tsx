import { useDarkMode } from "../contexts/ThemeContext";

export default function DarkModeButton() {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <button
      className="buttonDark buttonLight"
      onClick={toggleTheme}
      type="button"
    >
      {theme === "dark" ? "🌑" : "🌕"}
    </button>
  );
}
