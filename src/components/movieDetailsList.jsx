import React, { useState, useEffect } from "react";
import { MovieDetailsItem } from "./movieDetailsItem";
import "./movieDetailsItems.style.css";

const API_KEY = "d43e9dd1&s";

export const MovieDetailsList = (props) => {
  const [movieData, setMovieData] = useState([]);
  const apiUrl = `http://www.omdbapi.com/?apikey=${API_KEY}=${props.value}`;
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovieData(data.Search ?? []))
      .catch((error) => console.error("Error fetching data:", error));
  }, [props.value]);

  return (
    <div>
      <h2>Searched Movies</h2>

      {movieData.length > 0
        ? movieData.map(({ imdbID, Poster, Title, Year }) => (
            <MovieDetailsItem
              key={imdbID}
              id={imdbID}
              poster={Poster}
              title={Title}
              year={Year}
              showAdd={true}
              showRemove={false}
            />
          ))
        : "Please Search for Movies"}
    </div>
  );
};
