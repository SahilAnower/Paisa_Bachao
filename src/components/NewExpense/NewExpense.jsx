import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
const NewExpense=(props)=>{
    const [isActivated,changeActive]=useState(false);

    const expensedat=(expensedata)=>{
        const edata={
            ...expensedata,
            id: Math.random().toString()
        };
        props.onExpense(edata);
    } 

    const changeActivation=()=>{
        changeActive((prev)=>{
          return !prev;
        })
    }

    let curr=<button className="btn" onClick={changeActivation}>ADD EXPENSE💸</button>;

    if(isActivated===true){
        curr=<ExpenseForm onExpenseSubmit={expensedat} active={changeActivation}/>;
    }

    return (
        <div className="newex">
            {curr}
        </div>
    );
};

export default NewExpense;