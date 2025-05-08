import { Outlet } from "react-router";
import "./App.css";
import "./assets/styles/fonts.css";
import { useDarkMode } from "./contexts/ThemeContext";

function App() {
  const { theme } = useDarkMode();
  return (
    <main className={theme === "dark" ? "light" : "dark"}>
      <Outlet />
    </main>
  );
}

export default App;
