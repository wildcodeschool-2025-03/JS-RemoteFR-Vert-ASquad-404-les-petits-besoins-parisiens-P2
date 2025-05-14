import "../assets/styles/card.css";
import CardListToilets from "../components/CardListToilets";
import CardTitle from "../components/CardTitle";
import DarkModeButton from "../components/DarkModeButton";
import MyMaps from "../components/MyMaps/MyMaps";
import NavBarDesktop from "../components/NavBarDesktop";
import NavBar from "../components/Navbar";

export default function ToiletsPage() {
  return (
    <div className="page">
      <div className="navBarDesktop">
        <DarkModeButton />
        <NavBarDesktop />
      </div>
      <article className="cardList">
        <CardTitle />
        <div className="cardMap">
          <MyMaps />
        </div>
        <div className="nav-mobile desktop">
          <NavBar />
        </div>
        <CardListToilets />
      </article>
    </div>
  );
}
