import React from 'react';
import PropTypes from 'prop-types';

const LoadingGreetingBtn = ({ sGreetingBtn }) => {
  return (
    <button type="button" className={sGreetingBtn}>
      Зареєструватися
    </button>
  );
};

LoadingGreetingBtn.propTypes = {
  sGreetingBtn: PropTypes.string.isRequired,
};

export default LoadingGreetingBtn;
