import React, { useState, useEffect } from "react";
import ResultBar from "./resultBar";
import NominationBar from "./nominationBar";
import styles from "./styles/result_And_nomination.module.css";

const Result_And_nomination = (props) => {

  let savedNomination = JSON.parse(localStorage.getItem('Nomination'))
  let nomination = []
  if (savedNomination.length !== 0) {
    nomination = savedNomination
  }

  const [nominationList, setNominationList] = useState(nomination);
  const [resultList, setResultList] = useState(props.itemsList);
  
    useEffect(() => {
      localStorage.setItem('Nomination', JSON.stringify(nominationList))
    }, [nominationList])

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
    <div className={styles.result_And_nomination}>
      <ResultBar
        itemsList={resultList}
        onNominate={nominationHandler}
        movieName={props.movieName}
      ></ResultBar>
      <NominationBar
        nominationList={nominationList}
        onRemove={removeHandler}
      ></NominationBar>
    </div>
  );
};

export default Result_And_nomination;
