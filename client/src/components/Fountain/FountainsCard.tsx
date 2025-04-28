import Geolocation from "../../assets/images/geolocation.png";


type FountainType = {
    identifiant_ratp: number;
    adresse: string;
    ligne: string;
    station_ou_gare: string;
    code_postal : number;
    point_geographique: {
        lon: number;
        lat: number;
    };
};
  
  type Props = { fountain: FountainType };
  
  function FountainsCard({fountain}: Props) {
    return <div className="cardAdressInfo">
    <img className="geolocation" src={Geolocation} alt="ping" />
    <span className="rue">{fountain.adresse}</span>
    <button className="view" type="button">
      Voir sur la carte
    </button>
  </div>;
  }
  
  export default FountainsCard;
  