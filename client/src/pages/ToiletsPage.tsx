import "../assets/styles/card.css";
import CardListToilets from "../components/CardListToilets";
import CardTitle from "../components/CardTitle";
import DarkModeButton from "../components/DarkModeButton";
import MyMaps from "../components/MyMaps/MyMaps";
import NavBarDesktop from "../components/NavBarDesktop";
import NavBar from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollButton";

export default function ToiletsPage() {
  return (
    <div className="page">
      <div className="dark-mode">
        <DarkModeButton />
      </div>
      <div className="navBarDesktop">
        <NavBarDesktop />
      </div>
      <article className="cardList">
        <CardTitle />
        <div>
          <MyMaps />
        </div>
        <div className="nav-mobile desktop">
          <NavBar />
        </div>
        <CardListToilets />
      </article>
      <ScrollToTopButton />
    </div>
  );
}
