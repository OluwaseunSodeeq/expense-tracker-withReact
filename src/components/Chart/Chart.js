import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  console.log(props); //{dataPoints: Array(12)}
  const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValue);
  console.log(totalMax);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
