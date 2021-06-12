import React from "react";
import ChartBar from "./ChartBar/ChartBar";
import styles from "./Chart.module.css";

const Chart = (props) => {
  const valueArr = props.data.map((point) => point.value);
  const totalMax = Math.max(...valueArr);
  return (
    <div className={styles.chart}>
      {props.data.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          max={totalMax}
          label={point.label}
        ></ChartBar>
      ))}
    </div>
  );
};
export default Chart;
