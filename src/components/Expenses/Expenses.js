import React, { useState } from "react";
import styles from "./Expenses.module.css";
import ExpensesFilter from "../NewExpense/Filter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpenseChart";

const Expenses = (props) => {
  let [filterDate, setFilterDate] = useState(2020);
  const filteredArray = props.expenses.filter((exp) => {
    return exp.date.getFullYear() === filterDate;
  });
  const filterItemsHandler = (year) => {
    setFilterDate(+year);
  };

  return (
    <>
      <div className={styles.expenses}>
        <ExpensesFilter
          selected={filterDate}
          filterItems={filterItemsHandler}
        />
        <ExpensesChart expenses={filteredArray} />
        <ExpensesList list={filteredArray} />
      </div>
    </>
  );
};
export default Expenses;
