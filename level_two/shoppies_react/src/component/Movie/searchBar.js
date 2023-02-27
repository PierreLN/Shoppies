import styles from "./styles/searchBar.module.css";
import Card from "../UI/Card";
import SearchForm from "./searchForm";

export default function SearchBar(props) {

  return (
    <Card className={styles.input_main}>
      <div>Movie title</div>
      <SearchForm className={styles.input_search} onInput={props.onInput}>
      </SearchForm>
    </Card>
  );
}
