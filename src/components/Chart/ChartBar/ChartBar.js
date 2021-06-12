import React from "react";
import styles from "./ChartBar.module.css";

const ChartBar = (props) => {
  let barHeight = "0%";
  if (props.max > 0) {
    barHeight = Math.round((props.value / props.max) * 100) + "%";
  }
  return (
    <div className={styles["chart-bar"]}>
      <div className={styles["chart-bar__inner"]}>
        <div
          className={styles["chart-bar__fill"]}
          style={{ height: barHeight }}
        ></div>
      </div>
      <div className={styles["chart-bar__label"]}>{props.label}</div>
    </div>
  );
};
export default ChartBar;
