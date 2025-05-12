import { type ReactNode, createContext, useContext, useState } from "react";
type ThemeType = {
  theme: string;
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeType>({
  theme: "light",
  toggleTheme: () => undefined,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const value = {
    theme: currentTheme,
    toggleTheme: toggleTheme,
  };
  return <ThemeContext value={value}>{children}</ThemeContext>;
}

export function useDarkMode() {
  return useContext(ThemeContext);
}
