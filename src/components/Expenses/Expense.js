import React, { useState } from "react";
import Card from "../Ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensessList from "./ExpensessList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expense(props) {
  console.log(props); //{data: Array(4)} dummy and others

  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart data={filteredExpenses} />
        <ExpensessList data={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expense;
