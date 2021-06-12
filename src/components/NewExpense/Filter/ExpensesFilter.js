import React from "react";

import styles from "./ExpensesFilter.module.css";

const ExpensesFilter = (props) => {
  const selectChangeHandler = (event) => {
    props.filterItems(event.target.value);
  };
  return (
    <div className={styles["expenses-filter"]}>
      <div className={styles["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
