import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card.js";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  // let title = props.title;
  const chanagTitile = function () {
    // new value getting assign
    setTitle("Real Madrid");
    // inititial value
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={chanagTitile}>press Me</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
