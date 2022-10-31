import { useState } from "react";
import "./styles.scss";

// Rigth now it douesn't read any data.json to record the number of favs
//Should be implemented in the future

function FavCounter({ counter }) {
  console.log(counter, "hijo");
  const initialNumberFavs = counter;
  const [numberFavs, setNumberFavs] = useState(initialNumberFavs);

  return (
    <div className="fav_button">
      <button
        className="fav_button"
        onClick={(e) => {
          e.stopPropagation;

          setNumberFavs(numberFavs + 1);
        }}
      >
        +
      </button>
      <div className="number_favs">{numberFavs}</div>
      <button
        className="fav_button"
        onClick={(e) => {
          e.stopPropagation;
          {
            numberFavs > 0 && setNumberFavs(numberFavs - 1);
          }
        }}
      >
        −
      </button>
    </div>
  );
}

export default FavCounter;
