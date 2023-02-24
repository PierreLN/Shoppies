import React from "react";
import styles from "./styles/resultList.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ResultList = (props) => {

  const nominateHandler = () => {
    props.onNominate(props);
  };

  return (
    <li className={styles.resultList}>
      {props.title} ({props.year})
      <Button onClick={nominateHandler}>Nominate</Button>
    </li>
  );
};

export default ResultList;
