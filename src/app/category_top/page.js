"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function Category_top() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=3f2761ba67df964d1ec535335fa4ef9a`
      );
      setMovies(response.data.results);
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="top-rated-movies">
      <h2>Les mieux notés</h2>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <a href={`/movie/${movie.id}`} passHref>
              {" "}
              {/* ajoutez l'attribut passHref */}
              <a>
                {" "}
                {/* utilisez une balise <a> à la place de la balise <Link> */}
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </a>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
