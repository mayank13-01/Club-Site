import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';


const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no events.</h2>;
    }
    return (<ul className='expenses-list'>
        {props.items.map((expense, i) => <React.Fragment key={i}>
            <ExpenseItem
                key={expense.id}
                unique={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                details={expense.details}
                erase={props.erase}
                showClubs={props.showClubs}
            />
        </React.Fragment>)}
    </ul>);
};

export default ExpensesList;
