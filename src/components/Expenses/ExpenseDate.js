import React from "react";
import "./ExpenseDates.css";

function ExpenseDate(props) {
  console.log(props);

  const month = props.date.toLocaleString("eu-US", { month: "long" });
  const day = props.date.toLocaleString("eu-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  console.log(props.date);

  return (
    <div className="expense-date">
      <div className="expense-date__year">{month}</div>
      <div className="expense-date__month">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
