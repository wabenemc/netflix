"use client";

import React, { useState } from "react";
import "./page.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:3000/movie/search", {
        params: { query },
      });
      onSearch(response.data);
      setQuery("");
      navigate("/movie/search");
    } catch (error) {
      console.error("Erreur de recherche de film:", error);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Rechercher un film..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Rechercher
      </button>
    </form>
  );
};

export default Search;
