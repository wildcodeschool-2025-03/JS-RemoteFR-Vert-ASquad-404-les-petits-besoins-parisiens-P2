import "../assets/styles/card.css";
import mapParis from "../assets/images/map-Paris.png";
import CardListDefibrillators from "../components/CardListDefibrillator";
import CardTitle from "../components/CardTitle";
import DarkModeButton from "../components/DarkModeButton";
import NavBarDesktop from "../components/NavBarDesktop";
import NavBar from "../components/Navbar";

function DefibrillatorPage() {
  return (
    <>
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
          <CardListDefibrillators />
          <div className="nav-mobile desktop">
            <NavBar />
          </div>
        </article>
      </div>
    </>
  );
}

export default DefibrillatorPage;
