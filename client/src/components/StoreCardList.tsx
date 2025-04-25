import { useEffect, useState } from "react";
import StoreCard from "./StoreCard";

function StoreCardList() {
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

  type storeResponse = {
    total_count: number;
    results: storeType[];
  };

  const [stores, setStores] = useState<storeResponse | null>(null);

  useEffect(() => {
    fetch(
      "https://data.ratp.fr/api/explore/v2.1/catalog/datasets/commerces-de-proximite-agrees-ratp/records?where=dea_cp_livraison%3C76000&limit=100",
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data: storeResponse) => setStores(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <article className="stores-card-list">
      {Array.isArray(stores?.results) ? (
        stores.results.map((s) => <StoreCard key={s.dea_code} store={s} />)
      ) : (
        <h2>Loading, please wait a second ..</h2>
      )}
    </article>
  );
}

export default StoreCardList;
