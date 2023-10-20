import React from "react";
import { useEffect } from "react";
import { render } from 'react-dom';

import "./App.css";
import searchIcon from "./search.svg";

import MovieCard from "./movieCard";

// c4a79159
const API_URL = "http://www.omdbapi.com?apikey=c4a79159";

const App = () => {
  const moviesSearch = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = response.json();
    console.log(data);
  };

  const movie1 = {
    Title: "Batman Begins",
    Year: "2005",
    imdbID: "tt0372784",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  };

  useEffect(() => {
    moviesSearch("Batman");
  }, []);

  return (
    <div className="app">
      <h1>Moviefy</h1>
      {/*search div --------------- */}
      <div className="search">
        <input
          placeholder="search for a movie"
          value="superman"
          onChange={() => {}}
        ></input>
        <img src={searchIcon} alt="search icon" onClick={() => {}} />
      </div>
      {/*container div ------------- */}
      <div className="container">
        <MovieCard movie={movie1} />
      </div>
    </div>
  );
};

export default App;
