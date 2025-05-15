import Geolocation from "../assets/images/geolocation.png";
import "../assets/styles/shopCard.css";

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
        <p className="code-postal">Fermé le : {store.dea_jour_fermeture}</p>
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
        Voir sur la carte
      </button>
    </div>
  );
}

export default StoreCard;
