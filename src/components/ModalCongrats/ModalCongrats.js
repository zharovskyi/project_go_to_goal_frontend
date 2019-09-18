import React from 'react';
import FlagsIcon from '../../assets/images/FlagsIcon.png';

import PipeParty from '../../assets/images/PipeParty.png';
// import PropTypes from 'prop-types';
import styles from './ModalCongrats.module.css';

const ModalCongrats = () => {
  return (
    <div className={styles.container}>
      <img className={styles.flagsIcon} src={FlagsIcon} alt="FlagsIcon" />
      <div className={styles.modal}>
        <h1 className={styles.congrats}>Вітаємо!</h1>
        <p className={styles.textInform}>Ти отримуєш</p>
        <div className={styles.flagContainer}>
          <p className={styles.textPrise}>Велосипед</p>
          <p className={styles.textNewTask}>Час вибирати нову ціль!</p>
        </div>
        <button className={styles.button} type="button">
          Так!
        </button>
        {/* <img className={styles.pipeParty} src={PipeParty} alt="PipeParty" /> */}
      </div>
    </div>
  );
};

export default ModalCongrats;
