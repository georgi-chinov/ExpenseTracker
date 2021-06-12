import React from "react";
import styles from "./Date.module.css";

const Date = (props) => {
  const day = props.date.toLocaleString("en-gb", { day: "2-digit" });
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-gb", { month: "long" });
  return (
    <div className={styles["expense-date"]}>
      <div className={styles["expense-date__month"]}>{month}</div>
      <div className={styles["expense-date__year"]}>{year}</div>
      <div className={styles["expense-date__day"]}>{day}</div>
    </div>
  );
};
export default Date;
