import "../assets/styles/card.css";
import mapParis from "../assets/images/map-Paris.png";
import CardListShop from "../components/CardListShop";
import CardTitle from "../components/CardTitle";
import DarkModeButton from "../components/DarkModeButton";
import NavBarDesktop from "../components/NavBarDesktop";
import NavBar from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollButton";

function StoresPage() {
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
        <div className="cardmapStyle">
          <img className="mapStyle" src={mapParis} alt="mapParis" />
        </div>
        <div className="nav-mobile desktop">
          <NavBar />
        </div>
        <CardListShop />
      </article>
      <ScrollToTopButton />
    </div>
  );
}

export default StoresPage;
