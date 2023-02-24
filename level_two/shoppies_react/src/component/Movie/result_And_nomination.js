import ResultBar from "./resultBar";
import NominationBar from "./nominationBar";
import styles from "./styles/result_And_nomination.module.css";

const Result_And_nomination = (props) => {
  const a =(e) => {
    console.log(e)
  }
  return (
    <div className={styles.result_And_nomination}>
      <ResultBar
        itemsList={props.itemsList}
        onNominate={a}
      ></ResultBar>
      <NominationBar nominationList={props.itemsList}></NominationBar>
    </div>
  );
};

export default Result_And_nomination;
