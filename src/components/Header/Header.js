import React, { Component } from 'react';
import windowSize from 'react-window-size';
import css from './Header.module.css';
// import Logo from './Logo/Logo';
import Goal from '../Goal/Goal';
import ProgressBar from '../ProgressBar/ProgressBar';
// import User from './User/User  ';

class Header extends Component {
  render() {
    return (
      <header className={css.header}>
        {/* <Logo /> */}
        {this.props.windowWidth > 320 && <Goal />}
        {this.props.windowWidth > 1279 && <ProgressBar />}
        {/* <User /> */}
      </header>
    );
  }
}

export default windowSize(Header);
