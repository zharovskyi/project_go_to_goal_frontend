import React from 'react';
import 'react-sweet-progress/lib/style.css';
import css from './Goal.module.css';

const Goal = () => {
  return (
    <div className={css.goal}>
      <div className={css.goalLogo}>
        <p className={css.goalName}> Mоя мета:</p>
        <div className={css.goalLabel}>Вeлосипед</div>
      </div>
    </div>
  );
};

export default Goal;
