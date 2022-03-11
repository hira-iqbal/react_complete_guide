import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

  const ExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(ExpenseData);
    setEditingState(false);
  };

  const [editingState, setEditingState] = useState(false);

  const editSteteHandler = () => {
    setEditingState(true);
  };

  const cancelEditingHandler = () => {
    setEditingState(false);
  };

  return (
    <div className="new-expense">
      {!editingState && <button onClick={editSteteHandler}>Add New Expense</button>}
      {editingState && <ExpenseForm onSaveExpenseData={ExpenseDataHandler} onCancel= {cancelEditingHandler} />}
    </div>
  );
};
export default NewExpense;
