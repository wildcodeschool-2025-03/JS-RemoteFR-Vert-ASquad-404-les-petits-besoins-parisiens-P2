import CardAdress from "./CardAdress";

export default function CardListToilets() {
  return (
    <article className="cardList">
      <div className="cardMap">
        <img
          className="map"
          src="./src/assets/images/map-Paris.png"
          alt="mapParis"
        />
      </div>
      <CardAdress />
      <CardAdress />
    </article>
  );
}
