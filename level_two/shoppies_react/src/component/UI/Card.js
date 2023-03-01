import styles from "./Card.module.css";
import cx from "classnames";

const Card = (props) => {
  const classes = cx(styles.card, props.className)
  return <div className={classes}>{props.children}</div>;
};

export default Card;
