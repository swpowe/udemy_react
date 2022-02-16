import logo from "./logo.svg";
import "./App.css";
import Test from "./components/Test";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  let expenseList = [];

  expenses.forEach((expense) => {
    expenseList.push(
      <ExpenseItem
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
        key={expense.id}
      />
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <Test name="stephan" />
        {expenseList}
        {/* <ExpenseItem
          date={expenses[0].date.toISOString()}
          title={expenses[0].title}
          amount={expenses[0].amount}
        />
        <ExpenseItem
          date={expenseDate.toISOString()}
          title="Phone"
          amount="$24.47"
        /> */}
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
