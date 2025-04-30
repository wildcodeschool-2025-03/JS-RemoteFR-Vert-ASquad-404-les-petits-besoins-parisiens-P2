import { useEffect, useState } from "react";
import DefibrillatorCard from "./DefibrillatorCard";

export default function CardListDefibrillators() {
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
  type defibrillatorsResponse = {
    total_count: number;
    results: defibrillatorsType[];
  };
  const [defibrillators, setDefibrillators] =
    useState<defibrillatorsResponse | null>(null);

  useEffect(() => {
    fetch(
      "https://data.ratp.fr/api/explore/v2.1/catalog/datasets/defibrillateurs-du-reseau-ratp/records?where=com_cp%3C76000&limit=100",
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data: defibrillatorsResponse) => setDefibrillators(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <article className="defibrillator-card-list">
      {Array.isArray(defibrillators?.results) ? (
        defibrillators?.results.map((t) => (
          <DefibrillatorCard key={t.point_geographique.lon} defibrillator={t} />
        ))
      ) : (
        <h2>Loading, please wait a second ..</h2>
      )}
    </article>
  );
}
