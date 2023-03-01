import styles from "./styles/searchBar.module.css";
import Card from "../UI/Card";
import SearchForm from "./searchForm";

export default function SearchBar(props) {
  return (
    <Card className={styles.input_main}>
      <h2>Movie title</h2>
      <SearchForm
        className={styles.input_search}
        onSearchCompleted={props.onSearchCompleted}
      ></SearchForm>
    </Card>
  );
}
