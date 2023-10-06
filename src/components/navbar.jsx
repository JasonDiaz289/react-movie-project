import React from "react";
import { Link } from "react-router-dom";
import { Star, House, FilmSlate } from "phosphor-react";
import "../styles/navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="favoriteMovieLogo">My Favorite Movies</div>
      <div className="links">
        <Link to="/">
          <House size={30} />
        </Link>
        <Link to="movies">
          <FilmSlate size={30} />
        </Link>
        <Link to="favorites">
          <Star size={30} />
        </Link>
      </div>
    </div>
  );
};
