import "../assets/styles/card.css";
import ToiletsLogo from "../assets/images/map-Paris.png";
import CardTitle from "../components/CardTitle";
import NavBar from "../components/Navbar";
import StoreCardList from "../components/StoreCardList";

function StoresPage() {
  return (
    <article className="cardList">
      <CardTitle />
      <div className="cardMap">
        <img className="map" src={ToiletsLogo} alt="mapParis" />
      </div>
      <StoreCardList />
      <NavBar />
    </article>
  );
}

export default StoresPage;
