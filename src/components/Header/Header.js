import React from 'react';
import PropTypes from 'prop-types';

// style & npm
import windowSize from 'react-window-size';
import css from './Header.module.css';

// components
import Logo from '../Logo/Logo';
import Goal from '../Goal/Goal';
import User from '../User/User';
import ProgressBar from '../ProgressBar/ProgressBar';

const Header = ({ windowWidth }) => {
  return (
    <header className={css.header}>
      <Logo />
      {windowWidth > 320 && <Goal />}
      {windowWidth > 1279 && <ProgressBar />}
      <User />
    </header>
  );
};

Header.propTypes = {
  windowWidth: PropTypes.number.isRequired,
};

export default windowSize(Header);
