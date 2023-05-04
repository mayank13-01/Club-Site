import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        const date = new Date(expense.date);
        return date.getFullYear().toString() === filteredYear;
    });
    const showClubs = () => {
        props.show()
    }


    return (<React.Fragment>
        <Card className='expenses'>
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} erase={props.deleteItem} showClubs={showClubs}/>
            <button className="clubsButton" onClick={showClubs}>All Clubs</button>
        </Card>

    </React.Fragment>);
};

export default Expenses;
