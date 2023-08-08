import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  console.log(props); //{value: 0, maxValue: 2000, label: 'Dec'}

  let barFillheight = "0%";
  if (props.maxValue > 0) {
    console.log("Yes it is greater than 0");

    barFillheight = Math.round((props.value / props.maxValue) * 100) + "%";
    console.log(barFillheight, props.value, props.maxValue);
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillheight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
