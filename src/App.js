import React from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const data = [
    {
      curId: "e1",
      title: "Chelsea",
      amount: 5000,
      date: new Date(2024, 2, 14),
    },
    {
      curId: "e2",
      title: "Man U",
      amount: 3000,
      date: new Date(2023, 2, 24),
    },
    {
      curId: "e3",
      title: "Man City",
      amount: 2000,
      date: new Date(2021, 5, 22),
    },
    {
      curId: "e4",
      title: "Liverpool",
      amount: 1000,
      date: new Date(2011, 7, 10),
    },
  ];
  const addExpensesHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpensesHandler} />
      <Expense data={data}></Expense>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
