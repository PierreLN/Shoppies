import magnify_glass from '../../image/search.png'
import styles from './searchBar.module.css'
import Card from '../UI/Card'

export default function SearchBar(props) {
  return (
    <Card className={styles.input_main}>
        <div>Movie title</div>
        <div className={styles.input_search}>
          <img className={styles.magnify_glass} src={magnify_glass} alt=""></img>
          <input
            className={styles.input_box}
            placeholder="Search..."
          ></input>
        </div>
    </Card>
  );
}
