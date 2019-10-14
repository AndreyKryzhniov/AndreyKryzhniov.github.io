import React from 'react';
import styles from './Contacts.module.css';
import Letter from "./Letter/Letter";
import Title from "./Title/Title";
import button from '../comon CSS files/Button.module.css';

function Contacts() {
  return (
    <div className={styles.contacts}>
        <div className={styles.container}>
          <Title/>
          <Letter/>
          <button className={button.Bt}>Отправить</button>
        </div>
      </div>
  );
}

export default Contacts;
