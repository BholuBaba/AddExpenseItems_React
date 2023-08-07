import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData
        };
        props.onAddExpenseData(expenseData);
        setIsEditing(false);
    }
    const editHandler = () => {
        setIsEditing(true);
    }
    const cancelHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={editHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />}
        </div>
    );
}
export default NewExpense;