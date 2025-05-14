import "../assets/styles/card.css";
import { useState } from "react";
import mapParis from "../assets/images/map-Paris.png";
import CardListToilets from "../components/CardListToilets";
import CardTitle from "../components/CardTitle";
import DarkModeButton from "../components/DarkModeButton";
import NavBarDesktop from "../components/NavBarDesktop";
import NavBar from "../components/Navbar";

export default function ToiletsPage() {
  const [codePostalFilter, setCodePostalFilter] = useState("");
  const [accesPmrFilter, setAccesPmrFilter] = useState(false);
  const [relaisBebeFilter, setRelaisBebeFilter] = useState(false);

  return (
    <div className="page">
      <div className="dark-mode">
        <DarkModeButton />
      </div>
      <div className="navBarDesktop">
        <NavBarDesktop />
      </div>
      <article className="cardList">
        <CardTitle />
        <div className="cardMap">
          <img className="map" src={mapParis} alt="mapParis" />
        </div>
        <div className="nav-mobile desktop">
          <NavBar />
        </div>

        <div className="filters">
          <input
            type="text"
            id="codePostal"
            placeholder="Filtrer par code postal"
            value={codePostalFilter}
            onChange={(e) => setCodePostalFilter(e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="accesPmr"
            checked={accesPmrFilter}
            onChange={(e) => setAccesPmrFilter(e.target.checked)}
          />
          <p> Acces PMR</p>
        </div>
        <div>
          <input
            type="checkbox"
            id="relaisBebe"
            checked={relaisBebeFilter}
            onChange={(e) => setRelaisBebeFilter(e.target.checked)}
          />
          <p>Relais bébé</p>
        </div>

        <CardListToilets/>
      </article>
    </div>
  );
}
