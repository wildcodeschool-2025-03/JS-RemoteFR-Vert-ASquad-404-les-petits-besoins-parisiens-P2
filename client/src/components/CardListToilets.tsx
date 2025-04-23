import CardAdress from "./CardAdress";
import ToiletsLogo from "./src/assets/images/map-Paris.png";

export default function CardListToilets() {
  return (
    <article className="cardList">
      <div className="cardMap">
        <img className="map" src={ToiletsLogo} alt="mapParis" />
      </div>
      <CardAdress />
      <CardAdress />
    </article>
  );
}
