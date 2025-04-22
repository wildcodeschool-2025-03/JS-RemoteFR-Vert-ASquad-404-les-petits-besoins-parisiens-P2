import "../assets/styles/homepage.css";

function HomePage() {
  return (
    <>
      <div className="container3">
        <div className="container2">
          <div className="container1">
            <a href="/Homepage">
              <img
                src="./src/assets/images/home.png"
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
              src="./src/assets/images/Mascotte.svg"
              alt="mascotte"
              className="mascotte"
            />
          </div>
          <p className="paragraphe">Trouver à proximité</p>
        </div>
        <img
          src="./src/assets/images/train.jpg"
          alt="train"
          className="picturetrain"
        />
      </div>
    </>
  );
}

export default HomePage;
