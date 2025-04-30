import CardList from "../components/CardList";
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
        <NavBar />
      </div>
    </div>
  );
}

export default StoresPage;
