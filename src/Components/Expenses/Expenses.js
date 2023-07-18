import React, {useState} from 'react';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from '../NewExpense/ExpensesFilter';
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020');
  const saveYearHandler = (selectedYear) => {
    const DateValue = selectedYear;
    console.log(DateValue);
    setSelectedYear(DateValue);
  }
  return (
    <div>
      <ExpensesFilter selected={selectedYear} onChangeYear={saveYearHandler} />
      <div className='expenses'>
        <ExpenseItem items={props.data[0]} />
        <ExpenseItem items={props.data[1]} />
        <ExpenseItem items={props.data[2]} />
      </div>
    </div>
  );
}
export default Expenses;