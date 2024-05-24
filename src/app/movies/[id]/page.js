"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import "./pages.css";

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3f2761ba67df964d1ec535335fa4ef9a`
      );
      const data = await response.json();
      setMovie(data);
    };

    fetchData();
  }, [id]);

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img src={imageUrl} alt={movie.title} />
      <p>{movie.overview}</p>
    </div>
  );
}
