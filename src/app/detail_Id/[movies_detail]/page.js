"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MovieDetails(props) {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3f2761ba67df964d1ec535335fa4ef9a`
      );
      setMovie(response.data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="movie-details">
      {movie.title && <p>{movie.title}</p>}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
}
