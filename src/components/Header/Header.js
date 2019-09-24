import React from 'react';

// style & npm
import css from './Header.module.css';

// components
import Logo from '../Logo/Logo';
import Goal from '../Goal/Goal';
import User from '../User/User';
import ProgressBar from '../ProgressBar/ProgressBar';

const Header = () => {
  const windowWidth = document.documentElement.clientWidth;
  return (
    <header className={css.header}>
      <Logo />
      {windowWidth > 320 && <Goal />}
      {windowWidth > 1279 && <ProgressBar />}
      <User />
    </header>
  );
};

export default Header;
