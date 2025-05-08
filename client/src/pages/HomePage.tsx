import "../assets/styles/homepage.css";
import { NavLink } from "react-router-dom";
import mascotte from "../assets/images/Mascotte.svg";
import homeIcone from "../assets/images/home.png";
import background from "../assets/images/train.jpg";
import NavBar from "../components/Navbar";
import ButtonLanguage from "../components/buttonLanguage";
import { useTranslation } from "../contexts/LocaleContext";
function HomePage() {
  const { translations } = useTranslation();

  return (
    <>
      <div className="container4">
        <div className="container3">
          <div className="container2">
            <div className="container1">
              <NavLink to="/">
                <img src={homeIcone} alt="Icone Home" className="home" />
                <ButtonLanguage />
              </NavLink>
              <h1>
                LES PETITS
                <br />
                BESOINS
                <br />
                PARISIENS
              </h1>
              <img src={mascotte} alt="mascotte" className="mascotte" />
            </div>
            <p className="paragraphe">{translations.homepage.paragraph}</p>
          </div>
        </div>
        <div className="nav-mobile">
          <NavBar />
        </div>

        <img src={background} alt="train" className="picturetrain" />
      </div>
    </>
  );
}

export default HomePage;
