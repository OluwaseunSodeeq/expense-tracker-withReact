import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  console.log(props); //{selected: '2022', onChangeFilter: ƒ}

  // Filter callBackFuntion its event is onChnage
  const dropDownChangeHandler = (ev) => {
    props.onChangeFilter(ev.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
export default ExpensesFilter;
