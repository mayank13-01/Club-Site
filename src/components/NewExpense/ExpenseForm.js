import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enterDetails, setDetails] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

    };

    const detailsChangeHandler = (event) => {
        setDetails(event.target.value)
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredTitle.trim().length === 0 || enterDetails.trim().length === 0 || enteredDate.trim().length === 0) {
            alert('Please enter a valid input!')
        } else {
            const expenseData = {
                title: enteredTitle, amount: "1", date: new Date(enteredDate), details: enterDetails
            };
            props.onSaveExpenseData(expenseData);
            setEnteredTitle('');
            setDetails('');
            setEnteredDate('');
        }

    };

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input
                    type='text'
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input
                    type='date'
                    min='2019-01-01'
                    value={enteredDate}
                    onChange={dateChangeHandler}
                />
            </div>
            <div className="details">
                <label>Details</label>
                <textarea value={enterDetails}
                          onChange={detailsChangeHandler}></textarea>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Event</button>
        </div>
    </form>;
};

export default ExpenseForm;
