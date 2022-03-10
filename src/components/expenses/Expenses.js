import React, {useState} from 'react';
import'./Expenses.css';
import ExpenseFilter from'./ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
const Expenses = (props)=>{
  const [filteredYear, setFilteredYear] = useState('2019');

  const YearChangeHandler = (selectedYear) => {
    console.log("expenses.js");

    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onYearChange={YearChangeHandler} />
        {props.items.map((expense )=>
          (<ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />
          )
        )}
      </Card>
    </div>
  );
}
export default Expenses
