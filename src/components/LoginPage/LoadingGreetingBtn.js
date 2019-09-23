import React from 'react';
import PropTypes from 'prop-types';
import s from '../../pages/LoginPage/LoginPage.module.css';

const LoadingGreetingBtn = ({ onOpenModal }) => {
  return (
    <button onClick={onOpenModal} type="button" className={s.greeting_btn}>
      Зареєструватися
    </button>
  );
};

LoadingGreetingBtn.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};

export default LoadingGreetingBtn;
