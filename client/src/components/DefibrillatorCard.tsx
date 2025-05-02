import "../assets/styles/defibrillatorcard.css";
import Geolocation from "../assets/images/geolocation.png";
import { useTranslation } from "../contexts/LocaleContext";
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
    <div className="cardAdressdefibrillators">
      <div className="firstline">
        <img className="geolocation" src={Geolocation} alt="ping" />
        <span className="rue">{cite(_props.defibrillator.adr_voie)}</span>
      </div>
      <div className="horaires">
        <article className="oneline arrondissement">
          <h3>
            {" "}
            {arrondissement(_props.defibrillator.com_cp % 100)} arrondissement
          </h3>
        </article>
        <article className="oneline">
          <h3>{translations.DefibrillatorCard.time}</h3>
          {_props.defibrillator.dispo_h}
        </article>
      </div>
      <div className="pmr">
        <article className="oneline">
          <h3>{translations.DefibrillatorCard.available} </h3>{" "}
          {_props.defibrillator.dispo_i}
        </article>
        <article className="oneline">
          <h3>{translations.DefibrillatorCard.access}</h3>{" "}
          {_props.defibrillator.acc_lib}
        </article>
      </div>
      <article className="buttonView">
        <button className="view" type="button">
          {translations.DefibrillatorCard.view}
        </button>
      </article>
    </div>
  );
}
