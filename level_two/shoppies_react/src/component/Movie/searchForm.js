import React, { useRef } from "react";
import styles from "./styles/searchForm.module.css";
import styles2 from "./styles/searchBar.module.css";

import magnify_glass from "../../image/search.png";

const SearchForm = (props) => {
  const itemsTest2 = [
    { id: 3, title: "test", year: 123 },
    { id: 4, title: "testest", year: 21 },
    { id: 5, title: "testestest", year: 1 },
  ];

  const movieInputRef = useRef();

  const updateList = (event) => {
    event.preventDefault();

    const movieName = movieInputRef.current.value;

    console.log(movieName);
    props.onInput(itemsTest2, movieName);

    movieInputRef.current.value = "";
  };

  return (
    <form className={styles["form-control"]} onSubmit={updateList}>
      <img className={styles2.magnify_glass} src={magnify_glass} alt=""></img>
      <input
        type="text"
        className={styles2.input_box}
        placeholder="Search..."
        id="MovieName"
        ref={movieInputRef}
      ></input>
    </form>
  );
};

export default SearchForm;
