import React from 'react';
import styles from './Content.module.css';
import button from '../../comon CSS files/Button.module.css';

function Content() {
    return (
        <div className={styles.nameProject}>
            <div className={styles.type}>
                <div className={styles.view}>
                    <button className={button.Bt}>Смотреть</button>
                </div>
                <div className={styles.description}>
                    <span className={styles.text}>Название проекта</span>
                    <span className={styles.text}>Краткое описание</span>
                </div>
            </div>
            <div className={styles.type}>
                <div className={styles.view}>
                    <button className={button.Bt}>Смотреть</button>
                </div>
                <div className={styles.description}>
                    <span className={styles.text}>Название проекта</span>
                    <span className={styles.text}>Краткое описание</span>
                </div>
            </div>
        </div>
    );
}

export default Content;
