import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
function Expenses(props){
    const [year,changeyear]=useState("2020");
    const expensef=(y)=>{
        changeyear(y);
    }

    let expenses=props.expenses.filter((expense)=>{
        return expense.date.getFullYear().toString()===year;
    })

    let numItems=<p>No Item is present still. Add from ☝</p>
    if(expenses.length>0){
        numItems=expenses.map((expense)=>{
            return <ExpenseItem expenses={expense}/>;
        });
    }

    return (
        <div className="expenses">
            <ExpensesChart expenses={expenses}/>
            <ExpenseFilter expenseyear={year} expensef={expensef}/>
            {numItems}
        </div>
    );
}

export default Expenses;