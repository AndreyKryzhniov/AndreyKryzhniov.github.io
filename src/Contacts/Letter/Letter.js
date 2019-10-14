import React from 'react';
import styles from './Letter.module.css';

function Letter() {
    return (
        <div className={styles.letter}>
            <input className={styles.nameAndMail} placeholder='Name'/>
            <input className={styles.nameAndMail} placeholder='Email' />
            <input className={styles.message} placeholder='Your message' />
        </div>
    );
}

export default Letter;
