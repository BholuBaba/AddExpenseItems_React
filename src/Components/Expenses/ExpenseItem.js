import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props) {
    return (
        <li>
            <Card className="expenses">
                <ExpenseDate date={props.date} />
                <div className="expense_item_description">
                    <h3>{props.title}</h3>
                </div>
                <div className="expense_item_price">
                    <div>${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}
export default ExpenseItem;