import React from 'react';
import css from './Goal.module.css';

const Goal = () => {
  return (
    <div className={css.goal}>
      <div className={css.goalLogo}>
        <p className={css.goalName}>Moя мета:</p>
        <div className={css.goalLabel} />
      </div>
      <div className={css.progresBar}>
        <p className={css.progresScore}>0/1000</p>
        <div className={css.progresBar} />
      </div>
    </div>
  );
};

export default Goal;
