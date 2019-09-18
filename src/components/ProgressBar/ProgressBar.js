import React from 'react';
import { Progress } from 'react-sweet-progress';

import css from './ProgressBar.module.css';

const ProgressBar = () => {
  return (
    <div className={css.progress}>
      <p className={css.progressScore}>
        999 / <span className={css.total}> 1000</span>
      </p>
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
  );
};

export default ProgressBar;
