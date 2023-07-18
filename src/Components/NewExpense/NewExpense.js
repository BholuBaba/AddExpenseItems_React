import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
function NewExpense (props) {
    const saveExpenseDataHandler =(enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id: 4
        };
        //console.log(expenseData);
        props.onAddExpenseData(expenseData);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}
export default NewExpense;