import mapParis from "../assets/images/map-Paris.png";
import CardAdress from "./CardAdress";

export default function CardListForStyle() {
  return (
    <article className="cardList">
      <div className="cardmapStyle">
        <img className="mapStyle" src={mapParis} alt="mapParis" />
      </div>
      <CardAdress />
      <CardAdress />
    </article>
  );
}
