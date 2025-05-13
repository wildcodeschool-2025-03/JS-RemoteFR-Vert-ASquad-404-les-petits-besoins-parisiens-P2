import Geolocation from "../assets/images/geolocation.png";
import "../assets/styles/shopCard.css";

type storeType = {
  tco_libelle: string;
  dea_code: number;
  dea_nom_commerce: string;
  dea_jour_fermeture: string;
  dea_rue_livraison: string;
  dea_cp_livraison: number;
  geocodage_ban: {
    lon: number;
    lat: number;
  };
};

type Props = { store: storeType };

function StoreCard({ store }: Props) {
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

  return (
    <div className="cardAdressInfoShop">
      <div className="shop-header">
        <img className="geolocation-shop" src={Geolocation} alt="ping" />
        <span className="shop-adress">{store.dea_rue_livraison}</span>
      </div>
      <span className="shop-info">
        <p>{eniem(store.dea_cp_livraison % 100)} arrondissement</p>
        <div className="separation" />
        <p>
          {store.tco_libelle} | {store.dea_nom_commerce}
        </p>
        <p className="code-postal">Fermé le : {store.dea_jour_fermeture}</p>
      </span>
      <button className="button-shop" type="button">
        Voir sur la carte
      </button>
    </div>
  );
}

export default StoreCard;
