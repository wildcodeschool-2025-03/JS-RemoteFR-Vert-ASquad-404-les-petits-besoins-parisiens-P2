import { NavLink } from "react-router";
import Defibrillator from "../assets/images/Nav/defibrillator.svg";
import Home from "../assets/images/Nav/home.png";
import Shop from "../assets/images/Nav/shop.svg";
import Toilette from "../assets/images/Nav/toilette.svg";
import WaterFountain from "../assets/images/Nav/waterFountain.svg";

import "../assets/styles/navbardesktop.css";

const NavBarDesktop = () => {
  return (
    <nav className="navbarDesktop">
      <ul className="navbar-listDesktop">
        <li>
          <NavLink to="/">
            <img src={Home} alt="home icon" className="nav-home" />
          </NavLink>
        </li>

        <li className="nav-containerDesktop">
          <NavLink to="/toilets">
            <img
              src={Toilette}
              alt="icon toilettes"
              className="nav-iconDesktop"
            />
            <span className="nav-textDesktop">Toilettes</span>
          </NavLink>
        </li>
        <li className="nav-containerDesktop">
          <NavLink to="/fountains">
            <img
              src={WaterFountain}
              alt="icon fontaine"
              className="nav-iconDesktop"
            />
            <span className="nav-textDesktop">Fontaines à eau</span>
          </NavLink>
        </li>
        <li className="nav-containerDesktop">
          <NavLink to="/stores">
            <img src={Shop} alt="icon commerces" className="nav-iconDesktop" />
            <span className="nav-textDesktop">Commerces</span>
          </NavLink>
        </li>
        <li className="nav-containerDesktop">
          <NavLink to="/defibrillators">
            <img
              src={Defibrillator}
              alt="icon défibrilatteurs"
              className="nav-iconDesktop"
            />
            <span className="nav-textDesktop">Défibrillateurs</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarDesktop;
