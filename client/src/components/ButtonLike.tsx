import { useState } from "react";
import "../assets/styles/ButtonLike.css";

function ButtonLike() {
  const [like, setlike] = useState(false);

  const handlelike = () => {
    setlike(!like);
  };

  return (
    <button className="buttonLike" type="button" onClick={handlelike}>
      {like ? "❤️" : "🤍"}
    </button>
  );
}

export default ButtonLike;
