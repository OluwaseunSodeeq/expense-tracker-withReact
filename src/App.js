import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
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
    date: new Date(2022, 2, 24),
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
    date: new Date(2019, 7, 10),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpensesHandler = (expense) => {
    console.log("in app.js", expenses);
    setExpenses((prevExpenses) => {
      console.log([expense, ...prevExpenses]);

      return [expense, ...prevExpenses];
    });
    // data.push(expense);
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpensesHandler} />
      <Expense data={expenses}></Expense>
    </div>
  );
}

export default App;
