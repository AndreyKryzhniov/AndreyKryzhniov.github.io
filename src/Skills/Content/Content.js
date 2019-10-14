import React from 'react';
import styles from './Content.module.css';

function Content() {
    return (
                <div className={styles.specialization}>
                    <div className={styles.type}>
                        <div className={styles.nameAndLogo}>
                            <img className={styles.logo}></img>
                            <span className={styles.name}>React</span>
                        </div>
                        <div className={styles.description}>
                          <span>Подробное описание языка</span>
                        </div>
                    </div>
                    <div className={styles.type}>
                        <div className={styles.nameAndLogo}>
                            <img className={styles.logo}></img>
                            <span className={styles.name}>React</span>
                        </div>
                        <div className={styles.description}>
                          <span>Подробное описание языка</span>
                        </div>
                    </div>
                    <div className={styles.type}>
                        <div className={styles.nameAndLogo}>
                            <img className={styles.logo}></img>
                            <span className={styles.name}>React</span>
                        </div>
                        <div className={styles.description}>
                          <span>Подробное описание языка</span>
                        </div>
                    </div>
                </div>
    );
}

export default Content;
