import "../assets/styles/card.css";
import mapParis from "../assets/images/map-Paris.png";
import CardListShop from "../components/CardListShop";
import CardTitle from "../components/CardTitle";
import NavBarDesktop from "../components/NavBarDesktop";
import NavBar from "../components/Navbar";

function StoresPage() {
  return (
    <div className="page">
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
    </div>
  );
}

export default StoresPage;
