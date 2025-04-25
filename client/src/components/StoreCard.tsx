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

function StoreCard(_props: Props) {
  return <h1>Hello</h1>;
}

export default StoreCard;
