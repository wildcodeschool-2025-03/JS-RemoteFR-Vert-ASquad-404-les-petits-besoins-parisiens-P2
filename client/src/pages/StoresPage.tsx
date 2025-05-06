import CardList from "../components/CardList";
import DarkModeButton from "../components/DarkModeButton";
import NavBarDesktop from "../components/NavBarDesktop";
import NavBar from "../components/Navbar";

function StoresPage() {
  return (
    <div>
      <div className="navBarDesktop">
        <NavBarDesktop />
      </div>
      <CardList />
      <div className="nav-mobile desktop">
        <DarkModeButton />
        <NavBar />
      </div>
    </div>
  );
}

export default StoresPage;
