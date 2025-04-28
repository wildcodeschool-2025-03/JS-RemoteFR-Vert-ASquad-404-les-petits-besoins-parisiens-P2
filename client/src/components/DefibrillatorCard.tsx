import Geolocation from "../assets/images/geolocation.png";
type defibrillatorsType = {
  lat_coor1: string;
  long_coord1: number;
  adr_voie: string;
  com_cp: number;
  com_nom: string;
  acc: string;
  acc_lib: string;
  acc_complt: string;
  dispo_i: string;
  dispo_h: string;
  point_geographique: {
    lon: number;
    lat: number;
  };
};

type Props = { defibrillator: defibrillatorsType };
export default function DefibrillatorCard(_props: Props) {
  return (
    <div className="cardAdressInfo">
      <img className="geolocation" src={Geolocation} alt="ping" />
      <span className="rue">125 Avenue du defibrillateurs</span>
      <button className="view" type="button">
        Voir sur la carte
      </button>
    </div>
  );
}
