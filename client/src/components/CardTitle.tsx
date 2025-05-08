import { useLocation } from "react-router";
import Defibrillator from "../assets/images/heart.png";
import HomePng from "../assets/images/home.png";
import Mascotte from "../assets/images/mascotte.svg";
import Shop from "../assets/images/shop.png";
import Toilets from "../assets/images/toilettes.png";
import Fountain from "../assets/images/waterFountain.png";

export default function CardTitle() {
  const location = useLocation();
  let navImages = Toilets;
  let navTitle = "Toilettes";
  let navNumber = 100;

  if (location.pathname === "/toilets") {
    navImages = Toilets;
    navTitle = "Toilettes";
    navNumber = 100;
  } else if (location.pathname === "/fountains") {
    navImages = Fountain;
    navTitle = "Fountaines";
    navNumber = 46;
  } else if (location.pathname === "/stores") {
    navImages = Shop;
    navTitle = "Commerces";
    navNumber = 100;
  } else if (location.pathname === "/defibrillators") {
    navImages = Defibrillator;
    navTitle = "Defibrillateurs";
    navNumber = 100;
  }

  return (
    <article className="cardTitle">
      <div className="logoPage">
        <img className="mascotteTitle" src={Mascotte} alt="logo" />
        <h1>LES PETITS BESOINS PARISIENS</h1>
      </div>
      <img className="homeLogo" src={HomePng} alt="home" />
      <div className="cardToilettes">
        <img className="toilettesImg" src={navImages} alt="toilettes" />
        <div className="cardToilettesTxt">
          <h2>{navTitle}</h2>
          <p> {navNumber} disponibles</p>
        </div>
      </div>
    </article>
  );
}
