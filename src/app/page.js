"use client";
import Category_top from "./category_top/page";
import Bonjour from "./employes/page";
import HeroBanner from "./heroBanner.js/page";
import MoviesLess from "./movies_less/page";
import PopularMovies from "./movies_top/page.js";
import UpcomingMovies from "./movies_upcoming/page";
import Search from "./search_page/page";

export default function App(props) {
  return (
    <div>
      <HeroBanner />
      <PopularMovies />
      <MoviesLess />
      <UpcomingMovies />
      <Category_top />
      <Search />
      <Bonjour />
    </div>
  );
}
