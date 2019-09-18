import React from 'react';
import PropTypes from 'prop-types';

const LoginFooter = ({ sFooter, sFooterText }) => {
  return (
    <footer className={sFooter}>
      <p className={sFooterText}>@ Copyright 2019</p>
    </footer>
  );
};

LoginFooter.propTypes = {
  sFooter: PropTypes.string.isRequired,
  sFooterText: PropTypes.string.isRequired,
};

export default LoginFooter;
