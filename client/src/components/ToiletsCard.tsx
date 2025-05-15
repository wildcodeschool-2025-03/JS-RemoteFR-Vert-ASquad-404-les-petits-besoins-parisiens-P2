import Geolocation from "../assets/images/geolocation.png";
import "../assets/styles/toiletsCard.css";
import { useTranslation } from "../contexts/LocaleContext";
import ButtonLike from "./ButtonLike";
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
type Poi = { key: string; location: google.maps.LatLngLiteral; color: string };
type Props = {
  toilets: toiletsType;
  setPoiCenter: React.Dispatch<React.SetStateAction<Poi>>;
};
export default function ToiletsCard({ toilets, setPoiCenter }: Props) {
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
  /* function pour les horaires*/
  function clean(clean: string) {
    if (clean !== "Voir fiche équipement") {
      return toilets.horaire;
    }
    return "NC";
  }
  /* function pour les adresses*/
  function faceAu(adresse: string) {
    const cleanAdresse = adresse.includes("face au")
      ? adresse.substr(8)
      : adresse;
    const lowerAdresse = cleanAdresse.toLowerCase();
    return lowerAdresse.charAt(0).toUpperCase() + lowerAdresse.slice(1);
  }

  const { translations } = useTranslation();

  return (
    <div className="cardAdressInfoToilets">
      <div className="toilettes-header">
        <img className="geolocation-toilettes" src={Geolocation} alt="ping" />
        <span className="toilettes-adress">{faceAu(toilets.adresse)}</span>
      </div>
      <div className="toilettes-info">
        <div> {eniem(toilets.arrondissement % 100)} arrondissement</div>
        <div className="separation" />
        <div>
          {translations.ToiletsCard.time} {clean(toilets.horaire)}
        </div>
        <div>
          {translations.ToiletsCard.access} {toilets.acces_pmr}
        </div>
        <div>
          {translations.ToiletsCard.baby} {nc(toilets.relais_bebe)}
        </div>
      </div>
      <article className="buttonView">
        <button
          className="button-toilettes"
          type="button"
          onClick={() => {
            window.scrollTo({ top: 200, behavior: "smooth" });
            setPoiCenter({
              key: toilets.adresse,
              location: {
                lat: toilets.geo_point_2d.lat,
                lng: toilets.geo_point_2d.lon,
              },
              color: "#A14AFF",
            });
          }}
        >
          {translations.DefibrillatorCard.view}
        </button>
      </article>
      <ButtonLike />
    </div>
  );
}
