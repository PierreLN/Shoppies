import React from "react";
import styles from "./styles/nominationList.module.css";
import Button from "../UI/Button";

const NominationList = (props) => {
  const {title, year} = props
  const onRemoveHandler = () => {
    props.onRemove(props);
  };

  return (
    <div className={styles.nominationList}>
      {title} ({year})<Button onClick={onRemoveHandler}>Remove</Button>
    </div>
  );
};

export default NominationList;
