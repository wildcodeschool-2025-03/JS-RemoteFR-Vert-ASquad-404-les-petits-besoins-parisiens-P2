import "../assets/styles/card.css";
import mapParis from "../assets/images/map-Paris.png";
import CardListToilets from "../components/CardListToilets";
import CardTitle from "../components/CardTitle";
import DarkModeButton from "../components/DarkModeButton";
import NavBarDesktop from "../components/NavBarDesktop";
import NavBar from "../components/Navbar";

export default function ToiletsPage() {
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
        <CardListToilets />
      </article>
    </div>
  );
}
