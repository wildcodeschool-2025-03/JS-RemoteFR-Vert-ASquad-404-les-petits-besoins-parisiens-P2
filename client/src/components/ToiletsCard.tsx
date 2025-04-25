type toiletsType = {
  adresse: string;
  arrondissement: string;
  horraire: string;
  acces_pmr: string;
  relais_bebe: string | null;
  geo_point_2d: {
    lon: number;
    lat: number;
  };
};
type Props = { toilets: toiletsType };
export default function ToiletsCard(_props: Props) {
  return <h1>W.C</h1>;
}
