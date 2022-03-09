import React, {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = ()=> {
  //const [userInput, setUserInput] = useState({ enteredTitle: '',enteredAmount: '', enteredDate: '' });
  const [eneteredTitle, setEneteredTitle] = useState('');
  const [eneteredAmount, setEneteredAmount] = useState('');
  const [eneteredDate, setEneteredDate] = useState('');

  const TitleChangeHandler = (event) => {
    setEneteredTitle(event.target.value)
    // const setUserInput = ((prevState) => {
    //   return { ...prevState, eneteredTitle: event.target.value };
    // });
  };

  const AmountChangeHandler = (event) => {
    setEneteredAmount(event.target.value)
    // const setUserInput = ((prevState) => {
    //   return { ...prevState, eneteredAmount: event.target.value };
    // });
  };

  const DateChangeHandler = (event) => {
    setEneteredDate(event.target.value)
    // const setUserInput = ((prevState) => {
    //   return { ...prevState, eneteredDate: event.target.value };
    // });
  };

  const SubmitHandler = (event) => {

    event.preventDefault();

    const ExpenseData = {
      title: eneteredTitle,
      amount: eneteredAmount,
      date: new Date(eneteredDate)
    };

    console.log(event.target.value);
  };

  return (
    <form onSubmit = {SubmitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange = {TitleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange = {AmountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange = {DateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
