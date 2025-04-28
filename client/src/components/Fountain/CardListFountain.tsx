import { useEffect, useState } from "react";
import FountainsCard from "./FountainsCard";

function CardListFountains() {
  type FountainType = {
    identifiant_ratp: number;
    adresse: string;
    ligne: string;
    station_ou_gare: string;
    code_postal: number;
    point_geographique: {
      lon: number;
      lat: number;
    };
  };

  type FountainResponse = {
    total_count: number;
    results: FountainType[];
  };
  const [fountains, setFountains] = useState<FountainResponse | null>(null);

  useEffect(() => {
    fetch(
      "https://data.ratp.fr/api/explore/v2.1/catalog/datasets/fontaines-a-eau-dans-le-reseau-ratp/records?where=commune%3D%22Paris%22&limit=100",
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data: FountainResponse) => setFountains(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <article className="fountains-card-list">
      {fountains?.results.length ? (
        fountains.results.map((fountain) => (
          <FountainsCard key={fountain.identifiant_ratp} fountain={fountain} />
        ))
      ) : (
        <h2>Loading, please wait a second...</h2>
      )}
    </article>
  );
}

export default CardListFountains;
