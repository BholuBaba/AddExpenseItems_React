import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dateChangeHandler = event => {
    props.onChangeYear(event.target.value);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label className='expenses-filter__label'>Filter by year</label>
        <select className='expenses-filter__select' value={props.selected} onChange={dateChangeHandler}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;