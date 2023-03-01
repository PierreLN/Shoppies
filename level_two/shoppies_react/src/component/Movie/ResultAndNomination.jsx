import React, { useState, useEffect } from "react";
import ResultBar from "./resultBar";
import NominationBar from "./nominationBar";
import styles from "./styles/resultAndNomination.module.css";

const ResultAndNomination = ({ itemsList, movieName }) => {
  let savedNomination = JSON.parse(localStorage.getItem("Nomination"));
  let nomination = [];
  if (savedNomination.length !== 0) {
    nomination = savedNomination;
  }

  const [nominationList, setNominationList] = useState(nomination);
  const [resultList, setResultList] = useState(itemsList);

  useEffect(() => {
    setResultList(itemsList);
  }, [itemsList]);
  useEffect(() => {
    localStorage.setItem("Nomination", JSON.stringify(nominationList));
  }, [nominationList]);

  console.log(itemsList, resultList);
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
    setNominationList(() => {
      return filteredList;
    });

    setResultList((prevData) => {
      return [...prevData, data];
    });
  };

  return (
    <div className={styles.resultAndNomination}>
      <ResultBar
        itemsList={resultList}
        onNominate={nominationHandler}
        movieName={movieName}
      ></ResultBar>
      <NominationBar
        nominationList={nominationList}
        onRemove={removeHandler}
      ></NominationBar>
    </div>
  );
};

export default ResultAndNomination;
