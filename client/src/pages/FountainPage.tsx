import "../assets/styles/card.css";
import mapParis from "../assets/images/map-Paris.png";
import CardTitle from "../components/CardTitle";
import CardListFountain from "../components/Fountain/CardListFountain";
import NavBarDesktop from "../components/NavBarDesktop";
import NavBar from "../components/Navbar";

function FountainPage() {
  return (
    <div className="page">
      <div className="navBarDesktop">
        <NavBarDesktop />
      </div>
      <article className="cardList">
        <CardTitle />
        <div className="cardMap">
          <img className="map" src={mapParis} alt="mapParis" />
        </div>
        <div className="navBarMobile">
          <NavBar />
        </div>
        <CardListFountain />
      </article>
    </div>
  );
}

export default FountainPage;
