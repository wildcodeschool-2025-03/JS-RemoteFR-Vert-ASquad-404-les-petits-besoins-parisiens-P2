import { useState } from "react";
import "../assets/styles/card.css";
import CardListShop from "../components/CardListShop";
import CardTitle from "../components/CardTitle";
import DarkModeButton from "../components/DarkModeButton";
import MyMaps from "../components/MyMaps/MyMaps";
import NavBarDesktop from "../components/NavBarDesktop";
import NavBar from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollButton";

function StoresPage() {
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
        <CardListShop setPoiCenter={setPoiCenter} />
      </article>
      <ScrollToTopButton />
    </div>
  );
}

export default StoresPage;
