import React from 'react';
import styles from './Slogan.module.css';
import Title from "./Title/Title";
import Content from "./Content/Content";

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <Title/>
                <Content/>
            </div>
        </div>
    );
}

export default Slogan;
