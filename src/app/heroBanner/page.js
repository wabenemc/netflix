import React, { useEffect, useState } from "react";
import axios from "axios";
import "./page.css";

export default function HeroBanner(props) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=3f2761ba67df964d1ec535335fa4ef9a`
      );
      setMovie(response.data.results[0]); // afficher le premier film de la liste des films populaires
    };
    fetchData();
  }, []);

  const backgroundImageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
    : "";

  return (
    <div
      className="hero-banner"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="hero-banner-content">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
