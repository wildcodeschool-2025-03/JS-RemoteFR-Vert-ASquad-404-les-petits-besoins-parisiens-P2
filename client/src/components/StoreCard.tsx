import Geolocation from "../assets/images/geolocation.png";
import "../assets/styles/shopCard.css";
import { useTranslation } from "../contexts/LocaleContext";

type storeType = {
  tco_libelle: string;
  dea_code: number;
  dea_nom_commerce: string;
  dea_jour_fermeture: string;
  dea_rue_livraison: string;
  dea_cp_livraison: number;
  dea_commune_livraison: string;
  geocodage_ban: {
    lon: number;
    lat: number;
  };
};

type Props = { store: storeType };

function StoreCard({ store }: Props) {
  const { translations } = useTranslation();
  return (
    <div className="cardAdressInfoShop">
      <div className="shop-header">
        <img className="geolocation-shop" src={Geolocation} alt="ping" />
        <span className="shop-adress">
          {store.dea_rue_livraison}, {store.dea_cp_livraison}{" "}
          {store.dea_commune_livraison}
        </span>
      </div>
      <span className="shop-info">
        <p>
          {store.tco_libelle} | {store.dea_nom_commerce}
        </p>
        <p className="code-postal">
          {translations.shopCard.closedOn}
          {store.dea_jour_fermeture}
        </p>
      </span>
      <button className="button-shop" type="button">
        {translations.shopCard.view}
      </button>
    </div>
  );
}

export default StoreCard;
