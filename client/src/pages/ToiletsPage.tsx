import "../assets/styles/card.css";
import mapParis from "../assets/images/map-Paris.png";
import CardListToilets from "../components/CardListToilets";
import CardTitle from "../components/CardTitle";
import NavBar from "../components/Navbar";

export default function ToiletsPage() {
  return (
    <div className="toiletsPage">
      <article className="cardList">
        <CardTitle />
        <div className="cardMap">
          <img className="map" src={mapParis} alt="mapParis" />
        </div>
        <CardListToilets />
        <NavBar />
      </article>
    </div>
  );
}
