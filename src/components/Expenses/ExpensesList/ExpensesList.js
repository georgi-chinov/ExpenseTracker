import ExpenseItem from "../Expense/ExpenseItem";
import styles from "./ExpensesList.module.css";

const ExpensesList = (props) => {
  if (props.list.length === 0) {
    return (
      <h2 className={styles["expenses-list__fallback"]}> Found no expenses</h2>
    );
  }
  return (
    <ul className={styles["expenses-list"]}>
      {props.list.map((exp) => (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
