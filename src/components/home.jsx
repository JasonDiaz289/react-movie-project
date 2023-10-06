import React from "react";
import "../components/home.style.css"
import titleImage from "../images/myfavorite.jpg"
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="home">
    <Link to="movies">
    <img src={titleImage} />
    </Link>
    <div><b>Click Image to Search</b></div>
  </div>
);
