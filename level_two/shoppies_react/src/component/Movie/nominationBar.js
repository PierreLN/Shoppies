import styles from "./styles/nominationBar.module.css";
import Card from "../UI/Card";
import NominationList from "./nominationList";

export default function NominationBar(props) {

  if (props.nominationList.length === 0) {
    return (
      <Card className={styles.nomination_box}>
        <h3>
          <div>Nominations</div>
        </h3>
        <div>No data</div>
      </Card>
    );
  }

  return (
    <Card className={styles.nomination_box}>
      <h3>
        <div>Nominations</div>
      </h3>
      <div>
        <ul className={styles.list_nomination}></ul>
        {props.nominationList.map((data) => (
          <NominationList
            key={data.id}
            id={data.id}
            title={data.title}
            year={data.year}
            onRemove={props.onRemove}
          ></NominationList>
        ))}
      </div>
    </Card>
  );
}
