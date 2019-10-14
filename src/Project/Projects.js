import React from 'react';
import styles from './Projects.module.css';
import Title from './Title/Title';
import Content from "./Content/Content";

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <Title/>
                <Content/>
            </div>
        </div>
    );
}

export default Projects;
