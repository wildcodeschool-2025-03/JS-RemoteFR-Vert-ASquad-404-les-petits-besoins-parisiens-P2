import Geolocation from "../../assets/images/geolocation.png";
import "../../assets/styles/fontainsCard.css";
import { useTranslation } from "../../contexts/LocaleContext";

type FountainType = {
  identifiant_ratp: number;
  adresse: string;
  ligne: string;
  station_ou_gare: string;
  code_postal: number;
  point_geographique: {
    lon: number;
    lat: number;
  };
};

type Props = { fountain: FountainType };

function FountainsCard({ fountain }: Props) {
  const { translations } = useTranslation();
  return (
    <div className="cardAdressInfoFontain">
      <div className="fountain-header">
        <img className="geolocation-fountain" src={Geolocation} alt="ping" />
        <span className="fountain-adress">{fountain.adresse}</span>
      </div>
      <span className="fountain-info">
        <p>
          {translations.fountainsCard.line} {fountain.ligne} |{" "}
          {fountain.station_ou_gare}
        </p>
        <p className="code-postal">{fountain.code_postal}</p>
      </span>
      <button className="button-fountain" type="button">
        {translations.fountainsCard.view}
      </button>
    </div>
  );
}

export default FountainsCard;
