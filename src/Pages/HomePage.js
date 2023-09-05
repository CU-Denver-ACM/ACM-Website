import React from 'react';
import styles from '../CSS/HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>ACM</div>
      <div className={styles.content}>
        Welcome to the CU Denver ACM Homepage!
      </div>
      <div className={styles.footer}>
        © 2023 ACM, All Rights Reserved.
      </div>
    </div>
  );
}

export default HomePage;
