import "./ExpenseFilter.css";

function ExpenseFilter(props){
    // const [year,changeYear]=useState("select");

    const yearHandler=(event)=>{
        props.expensef(event.target.value);
    }

    return (
        <div className="expensefilter">
            <label>Filter by year-</label>
            <select value={props.expenseyear} onChange={yearHandler}>
                <option value="select">select</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
    );
}

export default ExpenseFilter;