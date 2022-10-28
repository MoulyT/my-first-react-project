import { useState } from "react";
import "./styles.scss";

function FavCounter() {
  const [numberFavs, setNumberFavs] = useState(0);

  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation;
          setNumberFavs(numberFavs + 1);
        }}
      >
        +
      </button>
      {numberFavs}
      <button
        onClick={(e) => {
          e.stopPropagation;
          setNumberFavs(numberFavs - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default FavCounter;
