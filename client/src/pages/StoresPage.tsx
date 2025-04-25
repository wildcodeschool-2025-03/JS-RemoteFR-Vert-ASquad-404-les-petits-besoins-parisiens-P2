import "../assets/styles/card.css";
import CardTitle from "../components/CardTitle";
import NavBar from "../components/Navbar";
import StoreCardList from "../components/StoreCardList";
import ToiletsLogo from "../assets/images/map-Paris.png";

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
