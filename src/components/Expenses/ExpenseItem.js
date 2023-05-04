import React, {useState, useEffect} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import styles from './ExpenseItem.module.css';

import {auth} from '../../firebase';
import './icons.css';


const ExpenseItem = (props) => {

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=>{
        let user = auth.currentUser;
        if(user.email === 'mayank.sharma.20cse@bmu.edu.in'){
            setIsAdmin(true);
        }
        console.log(user);

    },[])

    const [description, setDescription] = useState(false);

    const descriptionHandler = () => {
        setDescription(prevState => !prevState);
    }


    return (<li key={props.id}>
        <Card className={styles[`expense-item`]} key={props.unique}>
            <div className={styles[`expense-filler`]}>
                <ExpenseDate date={props.date}/>
                <div className={styles['expense-item__description']}>
                    <h2 onClick={descriptionHandler}> {props.title}</h2>
                    {isAdmin&&<i className='bi bi-trash3' onClick={() => props.erase(props.unique)}></i>}
                </div>
            </div>

            {description && <div className={styles['expense-item__details']}><h1>Description</h1>
                <p>{props.details}</p>
                <h4 className={styles.allClubs} onClick={props.showClubs}>Back To All Clubs</h4>
            </div>}
        </Card></li>);
};

export default ExpenseItem;
