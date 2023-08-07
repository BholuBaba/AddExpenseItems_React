import React, { useState } from 'react';
import './Expenses.css'
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2023');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  const filteredExpensesbyDate = props.items.filter((expense) => {
    return filteredYear.toString() === expense.date.getFullYear().toString();
  });
  return (
    <div>
      <ExpensesFilter selected={filteredYear} onChangeYear={filterChangeHandler} />
      <ExpenseChart expenses= {filteredExpensesbyDate}/>
      <ExpensesList items = {filteredExpensesbyDate}/>
    </div>
  );
}
export default Expenses;