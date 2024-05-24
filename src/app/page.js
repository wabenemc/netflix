"use client";
import HeroBanner from "./heroBanner/page";
import MoviesLess from "./less_movies/page";
import PopularMovies from "./top_movies/page.js";
import UpcomingMovies from "./upcoming_movies/page";

export default function App(props) {
  return (
    <div>
      <HeroBanner />
      <PopularMovies />
      <MoviesLess />
      <UpcomingMovies />
    </div>
  );
}
