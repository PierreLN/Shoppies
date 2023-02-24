import React, { useState } from "react";
import ResultBar from "./resultBar";
import NominationBar from "./nominationBar";
import styles from "./styles/result_And_nomination.module.css";

const Result_And_nomination = (props) => {
  const [nominationList, setNominationList] = useState([]);
  const [resultList, setResultList] = useState(props.itemsList);

  const nominationHandler = (newData) => {
    const filteredResult = resultList.filter((element) => {
      return newData.id !== element.id;
    });

    setResultList(filteredResult);

    setNominationList((prevData) => {
      return [newData, ...prevData];
    });
  };

  const removeHandler = (data) => {
    const filteredList = nominationList.filter((element) => {
      return element.id !== data.id;
    });
    setNominationList(filteredList);

    setResultList((prevData) => {
      return [...prevData, data];
    });
  };

  return (
    <div className={styles.result_And_nomination}>
      <ResultBar
        itemsList={resultList}
        onNominate={nominationHandler}
      ></ResultBar>
      <NominationBar
        nominationList={nominationList}
        onRemove={removeHandler}
      ></NominationBar>
    </div>
  );
};

export default Result_And_nomination;
