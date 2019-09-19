import React from 'react';
import { Progress } from 'react-sweet-progress';

import css from './ProgressBar.module.css';

const ProgressBar = ({ goalPoints, taskPoints, percent }) => {
  return (
    <div className={css.progress}>
      <p className={css.progressScore}>
        {taskPoints} / <span className={css.total}> {goalPoints}</span>
      </p>
      <Progress
        className={css.progresBar}
        percent={percent}
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
  );
};

export default ProgressBar;
