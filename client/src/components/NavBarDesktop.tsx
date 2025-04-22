import { Link } from "react-router-dom";
import Defibrillator from "../assets/images/Nav/defibrillator.svg";
import Home from "../assets/images/Nav/home.png";
import Shop from "../assets/images/Nav/shop.svg";
import Toilette from "../assets/images/Nav/toilette.svg";
import WaterFountain from "../assets/images/Nav/waterFountain.svg";

import "../assets/styles/navbardesktop.css";

const NavBarDesktop = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/" />
          <img src={Home} alt="home icon" className="nav-home" />
        </li>

        <li className="nav-container">
          <Link to="/toilets" />
          <img src={Toilette} alt="icon toilettes" className="nav-icon" />
          <span className="nav-text">Toilettes</span>
        </li>
        <li className="nav-container">
          <Link to="/fountain" />
          <img src={WaterFountain} alt="icon fontaine" className="nav-icon" />
          <span className="nav-text">Fontaines à eau</span>
        </li>
        <li className="nav-container">
          <Link to="/stores" />
          <img src={Shop} alt="icon commerces" className="nav-icon" />
          <span className="nav-text">Commerces</span>
        </li>
        <li className="nav-container">
          <Link to="/defibrillators" />
          <img
            src={Defibrillator}
            alt="icon défibrilatteurs"
            className="nav-icon"
          />
          <span className="nav-text">Défibrillateurs</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarDesktop;
