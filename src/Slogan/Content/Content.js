import React from 'react';
import styles from './Content.module.css';
import button from '../../comon CSS files/Button.module.css';

function Content() {
    return (
                <div className={styles.specialization}>
                    <button className={button.Bt} >Нанять меня</button>
                </div>
    );
}

export default Content;
