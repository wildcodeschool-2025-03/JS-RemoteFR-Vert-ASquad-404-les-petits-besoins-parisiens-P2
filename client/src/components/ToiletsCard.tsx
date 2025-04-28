import Geolocation from "../assets/images/geolocation.png";
import "../assets/styles/toiletsCard.css";
type toiletsType = {
  adresse: string;
  arrondissement: number;
  horaire: string;
  acces_pmr: string;
  relais_bebe: string | null;
  geo_point_2d: {
    lon: number;
    lat: number;
  };
};
type Props = { toilets: toiletsType };
export default function ToiletsCard({ toilets }: Props) {
  return (
    <div className="cardAdressInfoToilets">
      <div className="firstline">
        <img className="geolocation" src={Geolocation} alt="ping" />
        <span className="rue">{toilets.adresse}</span>
      </div>
      <div className="horaires">
        <article className="oneline arrondissement">
          {toilets.arrondissement} <h3> ème Arrondissement</h3>
        </article>
        <article className="oneline">
          <h3>Horaires : </h3>
          {toilets.horaire}
        </article>
      </div>
      <div className="pmr">
        <article className="oneline">
          <h3>Accès PMR : </h3> {toilets.acces_pmr}
        </article>
        <article className="oneline">
          <h3>Relai bébé :</h3> {toilets.relais_bebe}
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
