import styles from "./styles/nominationBar.module.css";
import Card from "../UI/Card";
import NominationList from "./nominationList";

export default function NominationBar({nominationList, onRemove}) {
  
  return (
    <Card className={styles.nomination_box}>
      <h3>
        <div>Nominations</div>
      </h3>
      <NominationBarContent {...{nominationList, onRemove}}></NominationBarContent>
    </Card>
  );
}

const NominationBarContent = ({nominationList, onRemove}) => {

  if (nominationList.length === 0) {
    return <div>No data...</div>;
  }
  return (
    <div>
      <ul className={styles.list_nomination}></ul>
      {nominationList.map((data) => (
        <NominationList
          key={data.id}
          id={data.id}
          title={data.title}
          year={data.year}
          onRemove={onRemove}
        ></NominationList>
      ))}
    </div>
  );
};
