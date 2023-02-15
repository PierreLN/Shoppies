import styles from './resultBar.module.css'
import Card from '../UI/Card'

export default function ResultBar(props) {
  return (
      <Card className={styles.result_box}>
        <h3>
          <div className={styles.search_word}>Results</div>
        </h3>
        <div id="search_result">
          <ul className={styles.list_search}></ul>
        </div>
      </Card>
  );
}
