import { useState } from "react";
import "../assets/styles/card.css";
import CardListToilets from "../components/CardListToilets";
import CardTitle from "../components/CardTitle";
import DarkModeButton from "../components/DarkModeButton";
import MyMaps from "../components/MyMaps/MyMaps";
import Filter from "../components/FilterButton";
import NavBarDesktop from "../components/NavBarDesktop";
import NavBar from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollButton";

export default function ToiletsPage() {
  type Poi = {
    key: string;
    location: google.maps.LatLngLiteral;
    color: string;
  };
  const centerParis: Poi = {
    key: "Paris",
    location: { lat: 48.8583276, lng: 2.2944867 },
    color: "#A14AFF",
  };
  const [poiCenter, setPoiCenter] = useState(centerParis);
  return (
    <div className="page">
      <div className="dark-mode">
        <DarkModeButton />
      </div>
      <div className="filter-button">
        <Filter />
      </div>
      <div className="navBarDesktop">
        <NavBarDesktop />
      </div>
      <article className="cardList">
        <CardTitle />
        <div>
          <MyMaps poiCenter={poiCenter} />
        </div>
        <div className="nav-mobile desktop">
          <NavBar />
        </div>
        <CardListToilets setPoiCenter={setPoiCenter} />
      </article>
      <ScrollToTopButton />
    </div>
  );
}
