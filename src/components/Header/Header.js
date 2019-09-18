import React from 'react';
import css from './Header.module.css';
// import Logo from './Logo/Logo';
import Goal from '../Goal/Goal';
// import User from './User/User  ';

const Header = () => {
  return (
    <header className={css.header}>
      {/* <Logo /> */}
      <Goal />
      {/* <User /> */}
    </header>
  );
};

export default Header;
