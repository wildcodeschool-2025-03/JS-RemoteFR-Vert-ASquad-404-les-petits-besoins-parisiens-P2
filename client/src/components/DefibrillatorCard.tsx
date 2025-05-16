import "../assets/styles/defibrillatorcard.css";
import Geolocation from "../assets/images/geolocation.png";
import { useTranslation } from "../contexts/LocaleContext";
import ButtonLike from "./ButtonLike";
import SocialNetworks from "./SocialNetworks";
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
type Poi = { key: string; location: google.maps.LatLngLiteral; color: string };
type Props = {
  defibrillator: defibrillatorsType;
  setPoiCenter: React.Dispatch<React.SetStateAction<Poi>>;
};
export default function DefibrillatorCard({
  defibrillator,
  setPoiCenter,
}: Props) {
  /* function pour les arrondissement*/
  function arrondissement(arrondissement: number) {
    if (arrondissement === 1) {
      return "1er";
    }
    if (arrondissement === 2) {
      return "2nd";
    }
    return ` ${arrondissement}ème `;
  }

  /* Function pour l'adresse Cité incomplete */
  function cite(cite: string) {
    if (cite.includes("Cité")) {
      return `Métro ${defibrillator.adr_voie}`;
    }
    return defibrillator.adr_voie;
  }

  const { translations } = useTranslation();

  return (
    <div className="cardAdressDefibrillator">
      <div className="defibrillator-header">
        <img
          className="geolocation-defibrillator"
          src={Geolocation}
          alt="ping"
        />
        <span className="defibrillator-adress">
          {cite(defibrillator.adr_voie)}
        </span>
      </div>
      <div className="defibrillator-info">
        <div>{arrondissement(defibrillator.com_cp % 100)} arrondissement</div>
        <div className="separation" />
        <div>
          {translations.DefibrillatorCard.time} {defibrillator.dispo_h}
        </div>
        <div>
          {translations.DefibrillatorCard.available} {defibrillator.dispo_i}
        </div>
        <div>
          {translations.DefibrillatorCard.access} {defibrillator.acc_lib}
        </div>
      </div>
      <button
        className="button-defibrillator"
        type="button"
        onClick={() => {
          window.scrollTo({ top: 200, behavior: "smooth" });
          setPoiCenter({
            key: defibrillator.adr_voie,
            location: {
              lat: defibrillator.point_geographique.lat,
              lng: defibrillator.point_geographique.lon,
            },
            color: "#A14AFF",
          });
        }}
      >
        {translations.DefibrillatorCard.view}
      </button>
      <ButtonLike />
      <SocialNetworks />
    </div>
  );
}
