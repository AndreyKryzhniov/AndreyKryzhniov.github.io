import React from 'react';
import styles from './Footer.module.css';
import SocialNetworks from './SocialNetworks';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <span>Andrey Kryzhniov</span>
        <SocialNetworks/>
        <span>2019 Все права защищенны</span>
      </div>
    </div>
  );
}

export default Footer;
