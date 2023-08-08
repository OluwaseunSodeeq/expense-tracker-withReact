import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card.js";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  // // let title = props.title;
  // const chanagTitile = function () {
  //   // new value getting assign
  //   setTitle("Real Madrid");
  //   // inititial value
  //   console.log(title);
  // };
  console.log(props);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}
export default ExpenseItem;
