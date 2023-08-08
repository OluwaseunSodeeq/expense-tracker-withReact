import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  console.log(props); //{data: Array(2)}

  const chartDatapoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "JUn", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  console.log(props); //{data: Array(0)}

  for (const expense of props.data) {
    console.log(expense);
    const expenseMonth = expense.date.getMonth(); //start @ 0
    console.log(expenseMonth); //number

    chartDatapoints[expenseMonth].value += expense.amount;
    console.log(chartDatapoints[expenseMonth].value);
  }
  console.log(chartDatapoints);

  return <Chart dataPoints={chartDatapoints} />;
};
export default ExpensesChart;
