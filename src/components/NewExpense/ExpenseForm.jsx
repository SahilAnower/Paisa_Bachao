import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm=(props)=>{
    const [title,changeTitle]=useState("");
    const [amount,changeAmount]=useState("");
    const [date,changeDate]=useState("");

    const titlechange=(event)=>{
        changeTitle(event.target.value);
    }
    const amountchange=(event)=>{
        changeAmount(event.target.value);
    }
    const datechange=(event)=>{
        changeDate(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const formdata={
            title: title,
            price: amount,
            date: new Date(date)
        };
        changeTitle("");
        changeAmount("");
        changeDate("");
        props.onExpenseSubmit(formdata);
    }

    const changeActive=()=>{
        props.active();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="formcontainer">
                <div className="inputfields">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titlechange}/>
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" min="1" max="100000" value={amount} onChange={amountchange}/>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2024-01-01" value={date} onChange={datechange}/>
                </div>
            </div>
            <div>
                <button className="btn" onClick={changeActive}>Cancel</button>
                <button className="btn">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;