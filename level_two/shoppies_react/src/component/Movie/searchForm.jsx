import React, { useRef } from "react";
import styles from "./styles/searchForm.module.css";
import styles2 from "./styles/searchBar.module.css";

import magnify_glass from "../../image/search.png";

const SearchForm = ({ onSearchCompleted }) => {
  const movieSearchRef = useRef();
  const updateList = async (event) => {
    event.preventDefault();

    const movieName = movieSearchRef.current.value;

    const searchResult = await search(movieName);
    onSearchCompleted(searchResult, movieName);

    movieSearchRef.current.value = "";
  };

  return (
    <form className={styles.searchForm} onSubmit={updateList}>
      <img className={styles2.magnify_glass} src={magnify_glass} alt=""></img>
      <input
        type="text"
        className={styles2.input_box}
        placeholder="Search..."
        id="MovieName"
        ref={movieSearchRef}
      ></input>
    </form>
  );
};

async function search(word) {
  let key = "e626c0fc";
  let api_url = "https://www.omdbapi.com/?s=" + word + "&apikey=" + key;
  let responce = await fetch(api_url);
  let data = await responce.json();
  let array = [];

  if (data["Response"] === "True") {
    for (let i = 0; i < 5; i++) {
      let movieTitle = data["Search"][i]["Title"];
      let movieYear = data["Search"][i]["Year"];
      array.push({ id: Math.random(), title: movieTitle, year: movieYear });
    }
  }
  return array;
}


export default SearchForm;
