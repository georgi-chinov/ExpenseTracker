import React from "react";
import Date from "../../Date/Date";
import styles from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  return (
    <div className={styles["expense-item"]}>
      <Date date={props.date} />
      <div className={styles["expense-item__description"]}>
        <h2>{props.title}</h2>
        <div className={styles["expense-item__price"]}>${props.amount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
