import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpensePrice from "./ExpensePrice";
import "./ExpenseItem.css";

function ExpenseItem(props){
    let date=props.expenses.date;
    let title=props.expenses.title;
    let price=props.expenses.price;
    return (
        <div className="expenseitem">
            <ExpenseDate date={date}/>
            <ExpenseTitle title={title}/>
            <ExpensePrice price={price}/>
        </div>
    );
}

export default ExpenseItem;