import React, { useState } from "react";
import { useEffect } from "react";
import { render } from "react-dom";

import "./App.css";
import searchIcon from "./search.svg";

import MovieCard from "./movieCard";

// c4a79159
const API_URL = "http://www.omdbapi.com?apikey=c4a79159";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    moviesSearch("batman");
  }, [search]);

  const moviesSearch = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
    console.log(movies)
  };

  

  return (
    <div className="app">
      <h1>Moviefy</h1>
      {/*search div --------------- */}
      <div className="search">
        <input
          placeholder="search for a movie"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <img
          src={searchIcon}
          alt="search icon"
          onClick={() => {
            moviesSearch(search);
          }}
        />
      </div>
      {/*container div ------------- */}
      <div className="container">
        {movies.map((movie) => <MovieCard movie={movie}/>)}
      </div>
    </div>
  );
};

export default App;
