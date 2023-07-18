import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';
function ExpenseItem(props) {
    const [title, setTitle] = useState(props.items.title);
    const clickHandler = () => {
        setTitle("Farhad");
    }
    return (
        <Card className="expense_item">
            <ExpenseDate date={props.items.date} />
            <div className="expense_item_description">
                <h3>{title}</h3>
            </div>
            <div>
                <div className="expense_item_price">${props.items.amount}</div>
                <button onClick={clickHandler}>Click Here</button>
            </div>
        </Card>
    );
}
export default ExpenseItem;