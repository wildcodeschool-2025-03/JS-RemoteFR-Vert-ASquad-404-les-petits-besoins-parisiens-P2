import { NavLink } from "react-router";
import "../assets/styles/navbar.css";
import { useTranslation } from "../contexts/LocaleContext";

const NavBar = () => {
  const { translations } = useTranslation();
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="nav-container">
          <NavLink to="/toilets" className="nav-link">
            <span className="nav-icon toilette-icon" />
            <span className="nav-text">
              {translations.navbarDesktop.Toilet}
            </span>
          </NavLink>
        </li>

        <li className="nav-container">
          <NavLink to="/fountains" className="nav-link">
            <span className="nav-icon fountain-icon" />
            <span className="nav-text">
              {translations.navbarDesktop.Waterfountains}
            </span>
          </NavLink>
        </li>

        <li className="nav-container">
          <NavLink to="/stores" className="nav-link">
            <span className="nav-icon shop-icon" />
            <span className="nav-text">{translations.navbarDesktop.shops}</span>
          </NavLink>
        </li>

        <li className="nav-container">
          <NavLink to="/defibrillators" className="nav-link">
            <span className="nav-icon defibrillator-icon" />
            <span className="nav-text">
              {translations.navbarDesktop.Defibrillators}
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
