import "../assets/styles/card.css";
import mapParis from "../assets/images/map-Paris.png";
import CardListDefibrillators from "../components/CardListDefibrillator";
import CardTitle from "../components/CardTitle";
import NavBarDesktop from "../components/NavBarDesktop";
import NavBar from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollToTopButton";

function DefibrillatorPage() {
  return (
    <>
      <div className="page">
        <div className="navBarDesktop">
          <NavBarDesktop />
        </div>
        <article className="cardList">
          <CardTitle />
          <div className="cardMap">
            <img className="map" src={mapParis} alt="mapParis" />
          </div>
          <CardListDefibrillators />
          <div className="nav-mobile desktop">
            <NavBar />
          </div>
        </article>
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default DefibrillatorPage;
