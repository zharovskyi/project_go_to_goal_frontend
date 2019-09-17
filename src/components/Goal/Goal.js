import React from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import css from './Goal.module.css';

const Goal = () => {
  return (
    <div className={css.goal}>
      <div className={css.goalLogo}>
        <p className={css.goalName}> Mоя мета:</p>
        <div className={css.goalLabel}>Вeлосипед</div>
      </div>
      <div className={css.progresBar}>
        <p className={css.progresScore}>
          999 / <span className={css.total}> 1000</span>
        </p>
        {/* <div className={css.progresBar} /> */}
        <Progress
          className={css.progresBar}
          percent={(500 / 1000) * 100}
          symbol="none"
          theme={{
            success: {
              symbol: '😀',
              color: '#9ecb45',
            },
            active: {
              symbol: ' ',
              color: '#f1c540',
            },
            default: {
              symbol: ' ',
              color: '#fbc630',
            },
          }}
        />
      </div>
    </div>
  );
};

export default Goal;
