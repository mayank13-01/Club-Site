import React, { useEffect, useState } from "react";
import styles from './AllExp.module.css'

import NewExpense from "./NewExpense/NewExpense";
import Expenses from "./Expenses/Expenses";
import SignoutButton from "./Club/SignoutButton";

import {auth} from "../firebase";

const AllExp = (props) => {

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=>{
        let user = auth.currentUser;
        if(user.email === 'mayank.sharma.20cse@bmu.edu.in'){
            setIsAdmin(true);
        }
        console.log(user);

    },[])
    return (<div className={styles.container}>
        <SignoutButton/>
        <h1 className={styles.clubName}>{`${props.selectedClub.toUpperCase()} CLUB`}</h1>
        {isAdmin&&<NewExpense onAddExpense={props.onAdd}/>}
        <Expenses items={props.items} deleteItem={props.onDelete} show={props.view}/>
    </div>)
}

export default AllExp;