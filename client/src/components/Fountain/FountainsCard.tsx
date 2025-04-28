import Geolocation from "../../assets/images/geolocation.png";
import "../../assets/styles/fountain/fountainsCard.css"

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
  return (
    <div className="cardAdressInfoFontain">
      <img className="geolocation" src={Geolocation} alt="ping" />
      <span className="fountain-adress">{fountain.adresse}</span>
      <p className="fountain-info">{fountain.ligne}{fountain.station_ou_gare}</p>
      <p>{fountain.code_postal}</p>
      <button className="view" type="button">
        Voir sur la carte
      </button>
    </div>
  );
}

export default FountainsCard;
