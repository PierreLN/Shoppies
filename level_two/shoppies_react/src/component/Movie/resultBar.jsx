import styles from "./styles/resultBar.module.css";
import ResultList from "./resultList";
import Card from "../UI/Card";

export default function ResultBar({movieName, itemsList, onNominate}) {
  return (
    <Card className={styles.result_box}>
      <h3>
        <div className={styles.search_word}>Results for: {movieName}</div>
      </h3>
      <div id="search_result">
        <ul className={styles.list_search}></ul>
        {itemsList.map((data) => (
          <ResultList
            key={data.id}
            id={data.id}
            title={data.title}
            year={data.year}
            onNominate={onNominate}
          ></ResultList>
        ))}
      </div>
    </Card>
  );
}
