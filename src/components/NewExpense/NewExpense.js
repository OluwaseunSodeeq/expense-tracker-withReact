import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpensesDatahandler = (enteredData) => {
    const expenseData = { ...enteredData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpensesData={saveExpensesDatahandler} />
    </div>
  );
};
export default NewExpense;
