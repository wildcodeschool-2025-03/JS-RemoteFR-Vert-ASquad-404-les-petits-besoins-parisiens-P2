import { NavLink } from "react-router";
import Defibrillator from "../assets/images/Nav/defibrillator.svg";
import Shop from "../assets/images/Nav/shop.svg";
import Toilette from "../assets/images/Nav/toilette.svg";
import WaterFountain from "../assets/images/Nav/waterFountain.svg";

import "../assets/styles/navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <NavLink to="/toilets">
          <li className="nav-container">
            <img src={Toilette} alt="icon toilettes" className="nav-icon" />
            <span className="nav-text">Toilettes</span>
          </li>
        </NavLink>

        <NavLink to="/fountains">
          <li className="nav-container">
            <img
              src={WaterFountain}
              alt="icon fountaine"
              className="nav-icon"
            />
            <span className="nav-text">Fontaines à eau</span>
          </li>
        </NavLink>

        <NavLink to="/stores">
          <li className="nav-container">
            <img src={Shop} alt="icon commerces" className="nav-icon" />
            <span className="nav-text">Commerces</span>
          </li>
        </NavLink>

        <NavLink to="/defibrillators">
          <li className="nav-container">
            <img
              src={Defibrillator}
              alt="icon défibrilatteurs"
              className="nav-icon"
            />
            <span className="nav-text">Défibrillateurs</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
