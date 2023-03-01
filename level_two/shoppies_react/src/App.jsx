import React, { useState } from "react";
import ResultAndNomination from "./component/Movie/ResultAndNomination";
import SearchBar from "./component/Movie/searchBar";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [movieSearchName, setMovieSearchName] = useState("");

  const inputHanlder = (newMovieList, movieName) => {
    setMovieSearchName(movieName);
    setMovieList(newMovieList);
  };

  return (
    <div className="main-page">
      <div>
        <h1 className="title">The Shoppies</h1>
      </div>
      <SearchBar onSearchCompleted={inputHanlder}></SearchBar>
      <ResultAndNomination
        itemsList={movieList}
        movieName={movieSearchName}
      ></ResultAndNomination>
    </div>
  );
}

export default App;
