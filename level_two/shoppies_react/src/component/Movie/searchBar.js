import magnify_glass from "../../image/search.png";
import styles from "./styles/searchBar.module.css";
import Card from "../UI/Card";

export default function SearchBar(props) {
  const itemsTest2 = [
    { id: 3, title: "wert", year: 123 },
    { id: 4, title: "POEWi", year: 321 },
    { id: 5, title: "112", year: 1 },
  ];

  const updateList = (event) => {
    event.preventDefault()
    props.onInput(itemsTest2)
  }
  

  return (
    <Card className={styles.input_main}>
      <div>Movie title</div>
      <div className={styles.input_search}>
        <img className={styles.magnify_glass} src={magnify_glass} alt=""></img>
        <input className={styles.input_box} placeholder="Search..."></input>
        <button onClick={updateList}>click test</button>
      </div>
    </Card>
  );
}
