import "./ExpensePrice.css";

function ExpensePrice(props){
    // console.log(props);
    return (
        <div className="price">
            <p>Rs {props.price}</p>
        </div>
    );
}

export default ExpensePrice;