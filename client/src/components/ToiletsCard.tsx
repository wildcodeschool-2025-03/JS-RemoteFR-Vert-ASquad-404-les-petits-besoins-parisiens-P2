import Geolocation from "../assets/images/geolocation.png";
import "../assets/styles/toiletsCard.css";
type toiletsType = {
  adresse: string;
  arrondissement: number;
  horaire: string;
  acces_pmr: string;
  relais_bebe: string;
  geo_point_2d: {
    lon: number;
    lat: number;
  };
};
type Props = { toilets: toiletsType };
export default function ToiletsCard({ toilets }: Props) {
  /* function pour les arrondissement*/
  function eniem(eniem: number) {
    if (eniem === 1) {
      return "1er";
    }
    if (eniem === 2) {
      return "2nd";
    }
    return ` ${eniem}ème `;
  }
  /* function pour les resultats nul*/
  function nc(nc: string) {
    if (nc !== null) {
      return toilets.relais_bebe;
    }
    return "NC";
  }
  /* function pour les horraires*/
  function clean(clean: string) {
    if (clean !== "Voir fiche équipement") {
      return toilets.horaire;
    }
    return "NC";
  }
  /* function pour les adresses*/
  function faceAu(faceAu: string) {
    if (faceAu.includes("face au")) {
      return toilets.adresse.substr(8);
    }
    return toilets.adresse;
  }

  return (
    <div className="cardAdressInfoToilets">
      <div className="firstline">
        <img className="geolocation" src={Geolocation} alt="ping" />
        <span className="rue">{faceAu(toilets.adresse)}</span>
      </div>
      <div className="horaires">
        <article className="oneline arrondissement">
          <h3> {eniem(toilets.arrondissement % 100)} arrondissement</h3>
        </article>
        <article className="oneline">
          <h3>Horaires : </h3>
          {clean(toilets.horaire)}
        </article>
      </div>
      <div className="pmr">
        <article className="oneline">
          <h3>Accès PMR : </h3> {toilets.acces_pmr}
        </article>
        <article className="oneline">
          <h3>Relai bébé :</h3> {nc(toilets.relais_bebe)}
        </article>
      </div>
      <article className="buttonView">
        <button className="view" type="button">
          Voir sur la carte
        </button>
      </article>
    </div>
  );
}
