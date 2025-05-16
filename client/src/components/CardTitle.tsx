import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import Defibrillator from "../assets/images/heart.png";
import HomePng from "../assets/images/home.png";
import Mascotte from "../assets/images/mascotte.svg";
import Shop from "../assets/images/shop.png";
import Toilets from "../assets/images/toilettes.png";
import Fountain from "../assets/images/waterFountain.png";
import { useTranslation } from "../contexts/LocaleContext";

export default function CardTitle() {
  const { translations } = useTranslation();
  const location = useLocation();
  let navImages = Toilets;
  let navTitle = "Toilettes";
  let navNumber = 100;

  if (location.pathname === "/toilets") {
    navImages = Toilets;
    navTitle = translations.CardTitle.Toilet;
    navNumber = 100;
  } else if (location.pathname === "/fountains") {
    navImages = Fountain;
    navTitle = translations.CardTitle.Waterfountains;
    navNumber = 46;
  } else if (location.pathname === "/stores") {
    navImages = Shop;
    navTitle = translations.CardTitle.shops;
    navNumber = 100;
  } else if (location.pathname === "/defibrillators") {
    navImages = Defibrillator;
    navTitle = translations.CardTitle.Defibrillators;
    navNumber = 100;
  }

  return (
    <article className="cardTitle">
      <div className="logoPage">
        <img className="mascotteTitle" src={Mascotte} alt="logo" />
        <h1>LES PETITS BESOINS PARISIENS</h1>
      </div>
      <NavLink to="/">
        <img className="homeLogo" src={HomePng} alt="home" />
      </NavLink>
      <div className="cardToilettes">
        <img className="toilettesImg" src={navImages} alt="toilettes" />
        <div className="cardToilettesTxt">
          <h2>{navTitle}</h2>
          <p>
            {" "}
            {navNumber} {translations.CardTitle.paragraph}
          </p>
        </div>
      </div>
    </article>
  );
}
