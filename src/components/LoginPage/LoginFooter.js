import React from 'react';

const LoginFooter = ({ sFooter, sFooterText }) => {
  return (
    <footer className={sFooter}>
      <p className={sFooterText}>@ Copyright 2019</p>
    </footer>
  );
};

export default LoginFooter;
