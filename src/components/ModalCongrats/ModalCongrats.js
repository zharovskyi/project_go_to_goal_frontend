import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from './ModalCongrats.module.css';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';

const ModalCongrats = ({ goal }) => {
  const { title } = goal;
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.congrats}>Вітаємо!</h1>
        <p className={styles.textInform}>Ти отримуєш</p>
        <div className={styles.flagContainer}>
          <p className={styles.textPrise}>{title}</p>
          <p className={styles.textNewTask}>Час вибирати нову ціль!</p>
        </div>
        <button className={styles.button} type="button">
          Так!
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  goal: dashboardSelectors.getGoal(store),
});
export default connect(
  mapStateToProps,
  null,
)(ModalCongrats);
