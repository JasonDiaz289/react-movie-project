import React, { useState } from "react";
import { MovieDetailsList } from "./movieDetailsList";
import "../components/movies.style.css"

export const Movies = () => {
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="movies">
      <div className="banner"></div>
      <div className="message">Welcome to Favorite Movies</div>
      <div className="movieSearch">
        <button onClick={() => setSearchValue(inputValue)}>Search</button>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="movieStuff">
        <MovieDetailsList value={searchValue} />
      </div>
    </div>
  );
};
