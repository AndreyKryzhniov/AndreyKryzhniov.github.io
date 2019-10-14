import React from 'react';
import styles from './Skills.module.css';
import Title from "./Title/Title";
import Content from "./Content/Content";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <Title/>
                <Content/>
            </div>
        </div>
    );
}

export default Skills;
