import "../assets/styles/card.css";
import CardListToilets from "../components/CardListToilets";
import CardTitle from "../components/CardTitle";
export default function Toilets() {
  return (
    <div className="toiletsPage">
      <CardTitle />
      <CardListToilets />
    </div>
  );
}
