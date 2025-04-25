import Geolocation from "../assets/images/geolocation.png";
type toiletsType = {
  adresse: string;
  arrondissement: string;
  horraire: string;
  acces_pmr: string;
  relais_bebe: string | null;
  geo_point_2d: {
    lon: number;
    lat: number;
  };
};
type Props = { toilets: toiletsType };
export default function ToiletsCard(_props: Props) {
  return (
    <div className="cardAdressInfo">
      <img className="geolocation" src={Geolocation} alt="ping" />
      <span className="rue">125 Avenue LEDRU ROLLIN</span>
      <button className="view" type="button">
        Voir sur la carte
      </button>
    </div>
  );
}
