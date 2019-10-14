import React from 'react';
import styles from './Content.module.css';

function Content() {
    return (
        <div className={styles.nameProject}>
            <div className={styles.type}>
                <div className={styles.view}>
                    <button>Смотреть</button>
                </div>
                <div className={styles.description}>
                    <span className={styles.text}>Название проекта</span>
                    <span className={styles.text}>Краткое описание</span>
                </div>
            </div>
            <div className={styles.type}>
                <div className={styles.view}>
                    <button>Смотреть</button>
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
