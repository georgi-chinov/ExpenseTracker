import React from "react";
import Form from "./Form";
import styles from "./NewExpense.module.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (data) => {
    const expenseData = { ...data, id: Math.random().toString() };
    props.onAdd(expenseData);
  };
  return (
    <div className={styles["new-expense"]}>
      <Form onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
