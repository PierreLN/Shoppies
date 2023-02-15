import ResultBar from "./resultBar";
import NominationBar from "./nominationBar";
import styles from './result_And_nomination.module.css'

const Result_And_nomination = (props) => {
  return (
    <div className={styles.result_And_nomination}>
      <ResultBar></ResultBar>
      <NominationBar></NominationBar>
    </div>
  );
};

export default Result_And_nomination;
