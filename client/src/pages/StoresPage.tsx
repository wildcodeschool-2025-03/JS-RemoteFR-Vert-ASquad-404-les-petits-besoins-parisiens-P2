import "../assets/styles/card.css";
import mapParis from "../assets/images/map-Paris.png";
import CardListShop from "../components/CardListShop";
import CardTitle from "../components/CardTitle";
import DarkModeButton from "../components/DarkModeButton";
import Filter from "../components/FilterButton";
import NavBarDesktop from "../components/NavBarDesktop";
import NavBar from "../components/Navbar";

function StoresPage() {
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
        <div className="cardMap">
          <img className="map" src={mapParis} alt="mapParis" />
        </div>
        <div className="nav-mobile desktop">
          <NavBar />
        </div>
        <CardListShop />
      </article>
    </div>
  );
}

export default StoresPage;
