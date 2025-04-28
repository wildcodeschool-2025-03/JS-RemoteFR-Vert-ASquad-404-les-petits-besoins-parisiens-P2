import { useEffect, useState } from "react";
import ToiletsCard from "./ToiletsCard";

export default function CardListToilets() {
  type toiletsType = {
    adresse: string;
    arrondissement: number;
    horaire: string;
    acces_pmr: string;
    relais_bebe: string | null;
    geo_point_2d: {
      lon: number;
      lat: number;
    };
  };
  type toiletsResponse = {
    total_count: number;
    results: toiletsType[];
  };
  const [toilets, setToilets] = useState<toiletsResponse | null>(null);

  useEffect(() => {
    fetch(
      "https://data.ratp.fr/api/explore/v2.1/catalog/datasets/sanisettesparis2011/records?where=arrondissement<76000&limit=100",
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data: toiletsResponse) => setToilets(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <article className="toilets-card-list">
      {Array.isArray(toilets?.results) ? (
        toilets.results.map((t) => (
          <ToiletsCard key={t.geo_point_2d.lon} toilets={t} />
        ))
      ) : (
        <h2>Loading, please wait a second ..</h2>
      )}
    </article>
  );
}
