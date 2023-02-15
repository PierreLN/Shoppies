import styles from "./nominationBar.module.css";
import Card from '../UI/Card'

export default function NominationBar(props) {
  return (
    <Card className={styles.nomination_box}>
      <h3>
        <div>Nominations</div>
      </h3>
      <div>
        <ul className={styles.list_nomination}></ul>
      </div>
    </Card>
  );
}
