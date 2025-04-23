export default function CardAdress() {
  return (
    <>
      <div className="cardAdressInfo">
        <img
          className="geolocation"
          src="./src/assets/images/geolocation.png"
          alt="ping"
        />
        <span className="rue">125 Avenue LEDRU ROLLIN</span>
        <button className="view" type="button">
          Voir sur la carte
        </button>
      </div>
    </>
  );
}
