import React from 'react';
import PropTypes from 'prop-types';

const LoadingGreetingBtn = ({ sGreetingBtn, onOpenModal }) => {
  return (
    <button onClick={onOpenModal} type="button" className={sGreetingBtn}>
      Зареєструватися
    </button>
  );
};

LoadingGreetingBtn.propTypes = {
  sGreetingBtn: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default LoadingGreetingBtn;
