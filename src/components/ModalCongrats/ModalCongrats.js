import React from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';
import styles from './ModalCongrats.module.css';

const ModalCongrats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.congrats}>Вітаємо!</h1>
        <p className={styles.textInform}>Ти отримуєш</p>
        <div className={styles.flagContainer}>
          <p className={styles.textPrise}>Велосипед</p>
          <p className={styles.textNewTask}>Час вибирати нову ціль!</p>
        </div>
        <Link to="/dashboard">
          <button className={styles.button} type="button">
            Так!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ModalCongrats;
