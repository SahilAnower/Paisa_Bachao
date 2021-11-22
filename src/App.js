import { useState } from 'react';
import './App.css';
import Expenses from './components/AllExpenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

{/*
  (1)Only add expense button at first after tapping it whole newexpense comes on.
  (2)Now Cancel button after it expands, after we click cancel button again gets small without submitting.
*/}

const DUMMY_DATA=[
  {
      id: 1,
      title: "Toilet Paper",
      date: new Date(2021,10,12),
      price: "500"
  },
  {
      id: 2,
      title: "Laptop",
      date: new Date(2021,10,13),
      price: "50000"
  },
  {
      id: 3,
      title: "Keyboard",
      date: new Date(2021,10,14),
      price: "1000"
  }
];

function App() {
  const [expenses,addExpenses]=useState(DUMMY_DATA);

  const expensehandler=(expensedata)=>{
    addExpenses((prevExpenses)=>{
      return [expensedata,...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onExpense={expensehandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
