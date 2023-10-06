import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/favoriteReducer";
import { MovieDetailsItem } from "./movieDetailsItem";

export const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div>
      <h3>Favorite Movies</h3>
      {favorites.length > 0
        ? favorites.map(({ id, poster, title, year }) => (
            <MovieDetailsItem
              key={id}
              id={id}
              poster={poster}
              title={title}
              year={year}
              showAdd={false}
              showRemove={true}
            />
          ))
        : "No Favorites Added"}
    </div>
  );
};
