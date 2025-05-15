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

type Props = { defibrillator: defibrillatorsType };
export default function DefibrillatorCard(_props: Props) {
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
      return `Métro ${_props.defibrillator.adr_voie}`;
    }
    return _props.defibrillator.adr_voie;
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
          {cite(_props.defibrillator.adr_voie)}
        </span>
      </div>
      <div className="defibrillator-info">
        <div>
          {arrondissement(_props.defibrillator.com_cp % 100)} arrondissement
        </div>
        <div className="separation" />
        <div>
          {translations.DefibrillatorCard.time} {_props.defibrillator.dispo_h}
        </div>
        <div>
          {translations.DefibrillatorCard.available}{" "}
          {_props.defibrillator.dispo_i}
        </div>
        <div>
          {translations.DefibrillatorCard.access} {_props.defibrillator.acc_lib}
        </div>
      </div>
      <button className="button-defibrillator" type="button">
        {translations.DefibrillatorCard.view}
      </button>
      <ButtonLike />
      <SocialNetworks />
    </div>
  );
}
