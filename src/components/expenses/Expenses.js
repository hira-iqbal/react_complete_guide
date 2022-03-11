import React, {useState} from 'react';
import'./Expenses.css';
import ExpenseFilter from'./ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
const Expenses = (props)=>{
  const [filteredYear, setFilteredYear] = useState('2019');

  const YearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense  => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let ExpenseContent = <p>No Items Found.</p>;
  if (filteredExpenses.length > 0 ){
    ExpenseContent = filteredExpenses.map((expense )=>
      (<ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />
      )
    );
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onYearChange={YearChangeHandler} />
        {ExpenseContent}
      </Card>
    </div>
  );
}
export default Expenses
