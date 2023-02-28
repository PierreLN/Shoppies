import React from "react";
import styles from "./styles/nominationList.module.css";
import Button from "../UI/Button";

const NominationList = (props) => {

  const onRemove = () => {
    props.onRemove(props);
  };

  return (
    <div className={styles.nominationList}>
      {props.title} ({props.year})<Button onClick={onRemove}>Remove</Button>
    </div>
  );
};

export default NominationList;
