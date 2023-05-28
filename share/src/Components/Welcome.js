import React from 'react';
import styles from './Welcome.module.css';

const WelcomePage = () => {
  return (
    <div className={styles['welcome-page']}>
      <h1 className={styles['welcome-title']}>Welcome to My Web App!</h1>
      <p className={styles['welcome-description']}>
        Enjoy sharing videos and photos, scheduling appointments, and more.
      </p>
    </div>
  );
};

export default WelcomePage;
