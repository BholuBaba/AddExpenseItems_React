import logo from './logo.svg';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
const App = () => {
  const expense = [{ id: 1, date: new Date(2021, 4, 15), title: 'Water Tax', amount: 540 },
  { id: 2, date: new Date(2022, 5, 15), title: 'Home Tax', amount: 1005 },
  { id: 3, date: new Date(2023, 6, 15), title: 'Land Tax', amount: 660 }]

  const addExpenseDataHandler = (enteredAddExpenseData) => {
    const expenseData = {
      ...expense,
      expense: enteredAddExpenseData
    };
    console.log(expenseData);
  }
  return (
    <div className="App">
      <h2>Let's get started</h2>
      <p>This is the React Tutorial by Udemy Classes</p>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      {/* <ExpenseItem date={expense[0].date} title={expense[0].title} amount={expense[0].amount}></ExpenseItem>
      <ExpenseItem date={expense[1].date} title={expense[1].title} amount={expense[1].amount}></ExpenseItem>
      <ExpenseItem date={expense[2].date} title={expense[2].title} amount={expense[2].amount}></ExpenseItem> */}
      {/* <ExpenseItem items={expense[0]}/>
      <ExpenseItem items={expense[1]}/>
      <ExpenseItem items={expense[2]}/> */}
      <Expenses data={expense} />
    </div>
  );
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Farhad Bari
        </a>
      </header> */}
