import React from "react";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/favoriteReducer";

export const MovieDetailsItem = ({
  id,
  poster,
  title,
  year,
  showAdd,
  showRemove,
}) => {
  const dispatch = useDispatch();
  const addFavorites = () => dispatch(add({ id, poster, title, year }));
  const removeFromFavorites = (id) => dispatch(remove({ id }));

  return (
    <div className="container">
      <img src={poster} />
      <div>
        <h3>{title}</h3>
        <p>Year: {year}</p>
        {showAdd && <button onClick={addFavorites}>Add To Favorites</button>}
        {showRemove && (
          <button onClick={() => removeFromFavorites(id)}>
            Remove From Favorites
          </button>
        )}
      </div>
    </div>
  );
};
