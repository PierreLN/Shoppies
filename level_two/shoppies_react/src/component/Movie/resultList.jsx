import React from "react";
import styles from "./styles/resultList.module.css";
import Button from "../UI/Button";

const ResultList = (props) => {
  const {title, year} = props
  const nominateHandler = () => {
    props.onNominate(props);
  };

  return (
    <li className={styles.resultList}>
      {title} ({year})
      <Button onClick={nominateHandler}>Nominate</Button>
    </li>
  );
};

export default ResultList;
