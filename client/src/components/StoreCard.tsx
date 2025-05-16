import Geolocation from "../assets/images/geolocation.png";
import "../assets/styles/shopCard.css";
import { useTranslation } from "../contexts/LocaleContext";
import ButtonLike from "./ButtonLike";
import SocialNetworks from "./SocialNetworks";

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
type Poi = { key: string; location: google.maps.LatLngLiteral; color: string };
type Props = {
  store: storeType;
  setPoiCenter: React.Dispatch<React.SetStateAction<Poi>>;
};

function StoreCard({ store, setPoiCenter }: Props) {
  function nc(nc: string) {
    if (nc !== null) {
      return store.dea_jour_fermeture;
    }
    return "/";
  }
  function eniem(eniem: number) {
    if (eniem === 1) {
      return "1er";
    }
    if (eniem === 2) {
      return "2nd";
    }
    return ` ${eniem}ème `;
  }
  const { translations } = useTranslation();
  return (
    <div className="cardAdressInfoShop">
      <div className="shop-header">
        <img className="geolocation-shop" src={Geolocation} alt="ping" />
        <div className="shop-adress">{store.dea_rue_livraison}</div>
      </div>
      <span className="shop-info">
        {eniem(store.dea_cp_livraison % 100)} arrondissement
        <div className="separation" />
        <p>
          {store.tco_libelle.toUpperCase().charAt(0)}
          {store.tco_libelle.slice(1)} | {store.dea_nom_commerce}
        </p>
        <p className="code-postal">
          {" "}
          {translations.shopCard.closedOn}
          {nc(store.dea_jour_fermeture)}
        </p>
      </span>
      <button
        className="button-shop"
        type="button"
        onClick={() => {
          window.scrollTo({ top: 200, behavior: "smooth" });
          setPoiCenter({
            key: store.dea_nom_commerce,
            location: {
              lat: store.geocodage_ban.lat,
              lng: store.geocodage_ban.lon,
            },
            color: "#A14AFF",
          });
        }}
      >
        {translations.shopCard.view}
      </button>
      <ButtonLike />
      <SocialNetworks />
    </div>
  );
}

export default StoreCard;
