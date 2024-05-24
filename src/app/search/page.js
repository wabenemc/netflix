import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Effectuez la recherche ici en utilisant le terme de recherche saisi
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=3f2761ba67df964d1ec53335fa4ef9a&query=${searchTerm}`
      )
      .then((response) => {
        if (response.data.results.length === 0) {
          setErrorMessage("Le film demandé n'existe pas");
        } else {
          setSearchResults(response.data.results);
          setErrorMessage("");
        }
      });
  };

  const handleMovieClick = (movie) => {
    // Récupérez les détails du film en fonction de son ID à partir de l'API de The Movie Database
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=3f2761ba67df964d1ec53335fa4ef9a`
      )
      .then((response) => {
        setSelectedMovie(response.data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id} onClick={() => handleMovieClick(movie)}>
            {movie.title}
          </li>
        ))}
      </ul>
      {selectedMovie && (
        <div>
          <h2>{selectedMovie.title}</h2>
          <p>{selectedMovie.overview}</p>
          {/* Ajoutez d'autres détails du film ici */}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
