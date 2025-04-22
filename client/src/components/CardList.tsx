import CardAdress from "./CardAdress";

export default function CardList() {
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
    </article>
  );
}
