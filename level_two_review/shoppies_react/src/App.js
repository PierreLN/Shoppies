import React, { useState } from "react";
import ResultAndNomination from "./component/Movie/result_And_nomination";
import SearchBar from "./component/Movie/searchBar";
import "./App.css";

function App() {
  const itemsTest = [
    { id: 1, title: "Marvel", year: "2020" },
    { id: 2, title: "DC", year: "2021" },
  ];

  const [movieList, setMovieList] = useState(itemsTest);
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
      <SearchBar onInput={inputHanlder}></SearchBar>
      <ResultAndNomination
        key={Math.random()}
        itemsList={movieList}
        movieName={movieSearchName}
      ></ResultAndNomination>
    </div>
  );
}

export default App;
