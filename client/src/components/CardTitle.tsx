export default function CardTitle() {
  return (
    <>
      <div className="logoPage">
        <img
          className="mascotte"
          src="./src/assets/images/mascotte.svg"
          alt="logo"
        />
        <h1>LES PETITS BESOINS PARISIENS</h1>
      </div>
      <article className="cardToilettes">
        <img
          className="toilettesImg"
          src="./src/assets/images/toilettes.png"
          alt="toilettes"
        />
        <div className="cardToilettesTxt">
          <h2>Toilettes</h2>
          <p> 16 disponbiles</p>
        </div>
      </article>
    </>
  );
}
