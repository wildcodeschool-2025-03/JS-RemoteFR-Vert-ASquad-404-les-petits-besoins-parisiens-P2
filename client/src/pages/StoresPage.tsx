import CardList from "../components/CardList";
import NavBarDesktop from "../components/NavBarDesktop";
import NavBar from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollToTopButton";

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
      <ScrollToTopButton />
    </div>
  );
}

export default StoresPage;
