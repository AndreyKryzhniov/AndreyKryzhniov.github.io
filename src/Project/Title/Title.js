import React from 'react';
import styles from '../../comon CSS files/Title.module.css';

function Title() {
    return (
        <div className={styles.titleContainer}>
            <h2 className={styles.title}>My projects</h2>
            <div className={styles.line}></div>
        </div>
    );
}

export default Title;
