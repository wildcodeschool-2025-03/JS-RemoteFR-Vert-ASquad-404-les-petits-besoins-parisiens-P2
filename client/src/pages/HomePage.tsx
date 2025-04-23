import "../assets/styles/homepage.css";
import homeIcone from '../assets/images/home.png'
import mascotte from  '../assets/images/Mascotte.svg'
import background from '../assets/images/train.jpg'

function HomePage() {
  return (
    <>
      <div className="container3">
        <div className="container2">
          <div className="container1">
            <a href="/">
              <img
                src={homeIcone}
                alt="Icone Home"
                className="home"
              />
            </a>
            <h1>
              Les petits
              <br />
              besoins
              <br />
              parisiens
            </h1>
            <img
              src={mascotte}
              alt="mascotte"
              className="mascotte"
            />
          </div>
          <p className="paragraphe">Trouver à proximité</p>
        </div>
        <img
          src= {background}
          alt="train"
          className="picturetrain"
        />
      </div>
    </>
  );
}

export default HomePage;
