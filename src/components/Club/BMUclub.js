import React from 'react';
import styles from './Club.module.css';

import Card from '../UI/Card';
import Info from './Info';
import {clubsArray} from "../clubsArray";
import SignoutButton from "./SignoutButton";

const Club = (props) => {

    const urlFetcher = (url) => {
        props.url(url)
    }

    const clubName = (club) => {
        props.club(club)
    }
    return (<Card className={styles.name}>
        <h1 className={styles.title}>BMU CLUB</h1>
        <SignoutButton/>
        <div className={styles.club}>
            {clubsArray.map((expense, i) => <React.Fragment key={i}>
                <Info
                    club={expense.club}
                    president={expense.president}
                    image={expense.image}
                    url={expense.url}
                    function={urlFetcher}
                    clubName={clubName}
                />
            </React.Fragment>)}
        </div>
    </Card>)
}

export default Club;