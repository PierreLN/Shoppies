import React from "react";
import styles from "./styles/nominationList.module.css";

const NominationList = (props) => {
  return (
    <div className={styles.nominationList}>
      {props.title} ({props.year})
    </div>
  );
};

export default NominationList;
