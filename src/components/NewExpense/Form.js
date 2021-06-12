import React, { useState } from "react";
import styles from "./Form.module.css";
const INITIAL_STATE = {
  title: "",
  amount: 0,
  date: "",
};
const Form = (props) => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [showForm, setShowForm] = useState(false);

  const titleHanlder = (el) => {
    setFormData((prevState) => {
      return { ...prevState, title: el.target.value };
    });
  };

  const dateHanlder = (el) => {
    setFormData((prevState) => {
      return { ...prevState, date: el.target.value };
    });
  };

  const amountHanlder = (el) => {
    setFormData((prevState) => {
      return { ...prevState, amount: el.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData({ ...formData, date: new Date(formData.date) });
    setFormData(INITIAL_STATE);
    toggleFormHandler();
  };
  const toggleFormHandler = () => {
    setShowForm((prevstate) => {
      return !prevstate;
    });
  };
  return (
    <>
      {showForm && (
        <form onSubmit={submitHandler}>
          <div className={styles["new-expense__controls"]}>
            <div className={styles["new-expense__control"]}>
              <label>Title</label>
              <input
                type="text"
                htmlFor="title"
                value={formData.title}
                onChange={(el) => titleHanlder(el)}
              />
            </div>
            <div className={styles["new-expense__control"]}>
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={formData.amount}
                onChange={(el) => amountHanlder(el)}
              />
            </div>
            <div className={styles["new-expense__control"]}>
              <label>Date</label>
              <input
                type="date"
                min="2019-1-1"
                max="2022-12-31"
                value={formData.date}
                onChange={(el) => dateHanlder(el)}
              />
            </div>
          </div>
          <div className={styles["new-expense__actions"]}>
            <button type="button" onClick={toggleFormHandler}>
              Cancel
            </button>
            <button type="submit">Add expense</button>
          </div>
        </form>
      )}
      {!showForm && (
        <button type="button" onClick={toggleFormHandler}>
          Add new expense
        </button>
      )}
    </>
  );
};
export default Form;
