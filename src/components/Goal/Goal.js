import React from 'react';
import PropTypes from 'prop-types';

// style & npm
import 'react-sweet-progress/lib/style.css';
import css from './Goal.module.css';

const Goal = ({ title, handleOpen, percent }) => {
  let btn;
  if (percent < 100) {
    btn = 'disabled';
  }
  return (
    <div className={css.goal}>
      <div className={css.goalLogo}>
        <p className={css.goalName}> Mоя мета:</p>
        <button
          type="button"
          className={percent < 100 ? css.goalBtn : css.goalBtnAcrtive}
          onClick={handleOpen}
          disabled={btn}
        >
          {title}
        </button>
      </div>
    </div>
  );
};
Goal.propTypes = {
  title: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  handleOpen: PropTypes.func.isRequired,
};
export default Goal;
