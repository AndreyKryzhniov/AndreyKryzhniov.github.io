import React from 'react';
import styles from './Main.module.css';
import myPhoto from '../Images/Avatar.jpg';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hi!</span>
                    <span>My name is <span>Andrey Kryzhniov</span></span>
                    <h1>I am a front-end developer</h1>
                </div>
                <div className={styles.avatar}>
                    <div className={styles.photoBg}></div>
                  <img src={myPhoto} alt='MyPhoto' className={styles.photo}/>
                </div>
            </div>
        </div>
    );
}

export default Main;
