import React, {useState} from 'react';
import'./Expenses.css';
import ExpenseFilter from'./ExpenseFilter';
import ExpenseList from './ExpensesList';
import Card from '../UI/Card';
const Expenses = (props)=>{
  const [filteredYear, setFilteredYear] = useState('2019');

  const YearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense  => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onYearChange={YearChangeHandler} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses
