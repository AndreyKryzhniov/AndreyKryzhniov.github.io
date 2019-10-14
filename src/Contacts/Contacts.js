import React from 'react';
import styles from './Contacts.module.css';
import Letter from "./Letter/Letter";
import Title from "./Title/Title";

function Contacts() {
  return (
    <div className={styles.contacts}>
        <div className={styles.container}>
          <Title/>
          <Letter/>
          <button className={styles.Bt}>Отправить</button>
        </div>
      </div>
  );
}

export default Contacts;
