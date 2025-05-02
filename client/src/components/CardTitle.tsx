import { NavLink, useLocation } from "react-router-dom";
import Defibrillators from "../assets/images/heart.png";
import HomePng from "../assets/images/home.png";
import Mascotte from "../assets/images/mascotte.svg";
import Shop from "../assets/images/shop.png";
import Toilets from "../assets/images/toilettes.png";
import Fountains from "../assets/images/waterFountain.png";

export default function CardTitle() {
  const location = useLocation();

  let image: string;
  let title: string;
  let disponible: string;

  if (location.pathname.includes("fountains")) {
    image = Fountains;
    title = "Fontaines";
    disponible = "46 disponibles";
  } else if (location.pathname.includes("stores")) {
    image = Shop;
    title = "Commerces";
    disponible = "100 disponibles";
  } else if (location.pathname.includes("defibrillators")) {
    image = Defibrillators;
    title = "Défibrillateurs";
    disponible = "100 disponibles";
  } else {
    image = Toilets;
    title = "Toilettes";
    disponible = "100 disponibles";
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
        <img className="toilettesImg" src={image} alt={title} />
        <div className="cardToilettesTxt">
          <h2>{title}</h2>
          <p>{disponible}</p>
        </div>
      </div>
    </article>
  );
}
