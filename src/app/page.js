"use client";
// import Category_top from "./category_top/page";
// import Bonjour from "./employes/page";
import HeroBanner from "./heroBanner/page";
import MoviesLess from "./less_movies/page";
import SearchBar from "./search/page";
import PopularMovies from "./top_movies/page.js";
import UpcomingMovies from "./upcoming_movies/page";
// import MovieDetails from "./movies_detail/page";

export default function App(props) {
  return (
    <div>
      <HeroBanner />
      <PopularMovies />
      <MoviesLess />
      <UpcomingMovies />
      {/* <MovieDetails /> */}
      {/* <Category_top /> */}
      {/* <SearchBar /> */}
      {/* <Bonjour /> */}
    </div>
  );
}
