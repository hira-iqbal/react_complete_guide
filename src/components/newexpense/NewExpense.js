import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

  const ExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(ExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={ExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
