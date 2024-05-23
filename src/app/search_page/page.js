import React from "react";
import "./page.css";

export default function SearchResultsPage({ searchResults }) {
  return (
    <div className="search-results">
      {searchResults.length > 0 ? (
        searchResults.map((movie) => (
          <div key={movie.id} className="search-result-item">
            <Link to={`/movie/${movie.id}`} className="movie-name">
              {" "}
              {movie.name}
            </Link>
          </div>
        ))
      ) : (
        <p>Film non trouver.</p>
      )}
    </div>
  );
}
