import HomePng from "../assets/images/home.png";
import Mascotte from "../assets/images/mascotte.svg";
import Toilets from "../assets/images/toilettes.png";

export default function CardTitle() {
  return (
    <article className="cardTitle">
      <div className="logoPage">
        <img className="mascotteTitle" src={Mascotte} alt="logo" />
        <h1>LES PETITS BESOINS PARISIENS</h1>
      </div>
      <img className="homeLogo" src={HomePng} alt="home" />
      <div className="cardToilettes">
        <img className="toilettesImg" src={Toilets} alt="toilettes" />
        <div className="cardToilettesTxt">
          <h2>Toilettes</h2>
          <p> 16 disponibles</p>
        </div>
      </div>
    </article>
  );
}
