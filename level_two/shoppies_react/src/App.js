import React, { useState } from "react";
import ResultAndNomination from "./component/Movie/result_And_nomination";
import SearchBar from "./component/Movie/searchBar";
import "./App.css";

// async function search(ele) {
//   let key = "e626c0fc";
//   let word = ele.value;
//   let api_url = "https://www.omdbapi.com/?s=" + word + "&apikey=" + key;
//   let responce = await fetch(api_url);
//   let data = await responce.json();
//   let title = "None";

//   if (data["Response"] === "True") {
//     for (let i = 0; i < 5; i++) {
//       title = data["Search"][i]["Title"];
//       let year = data["Search"][i]["Year"];
//       let text = title + " (" + year + ")";
//     }
//   }

//   return <div>{"f"}</div>;
// }

function App() {
  const itemsTest = [
    { id: 1, title: "Marvel", year: 2020 },
    { id: 2, title: "DC", year: 2021 },
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
