import React from 'react';
import styles from './Info.module.css';


const Info = (props) => {
    const urlFetch = () => {
        props.function(props.url)
    }
    const clubName = () => {
        props.clubName(props.club)
    }
    const details = () => {
        urlFetch();
        clubName();
    }

    return (<div className={styles.link} onClick={details}>
        <div className={styles.info}>
            <div className={styles.photo}><img src={props.image} alt=""/></div>
            <div className={styles.details}>
                <h2>{props.club}</h2>
                <span>{props.president}</span>
            </div>
        </div>
    </div>);
}

export default Info;