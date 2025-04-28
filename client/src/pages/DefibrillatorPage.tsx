import "../assets/styles/card.css";
import mapParis from "../assets/images/map-Paris.png";
import CardListDefibrillators from "../components/CardListDefibrillator";
import CardTitle from "../components/CardTitle";
import NavBar from "../components/Navbar";

function DefibrillatorPage() {
  return (
    <>
      <article className="cardList">
        <CardTitle />
        <div className="cardMap">
          <img className="map" src={mapParis} alt="mapParis" />
        </div>
        <CardListDefibrillators />
        <NavBar />
      </article>
    </>
  );
}

export default DefibrillatorPage;
