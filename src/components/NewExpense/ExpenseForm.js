import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangehandler = (ev) => {
    console.log(ev.target.value);

    // Best way
    setEnteredTitle(ev.target.value);

    // not realy a good way
    // setUserInput({ ...userInput, enteredTitle: ev.target.value });

    // a good way
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: ev.target.value };
    // });
  };
  const amountChangehandler = (ev) => {
    console.log(ev.target.value);
    setEnteredAmount(ev.target.value);
    // setUserInput({ ...userInput, enteredAmount: ev.target.value });
  };
  const dateChangehandler = (ev) => {
    console.log(ev.target.value);
    setEnteredDate(ev.target.value);
    // setUserInput({ ...userInput, enteredDate: ev.target.value });
  };
  const submitHandler = (ev) => {
    ev.preventDefault();
    const enteredData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(enteredData);
    props.onSaveExpensesData(enteredData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>

          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="Number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
