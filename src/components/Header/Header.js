import React, { Component } from 'react';
import windowSize from 'react-window-size';
import css from './Header.module.css';
import Logo from '../Logo/Logo';
import Goal from '../Goal/Goal';
import ProgressBar from '../ProgressBar/ProgressBar';
import User from '../User/User';
import { connect } from 'react-redux';
import * as  logOutSelector from '../../redux/ModalLogout/ModalLogoutSelectors';
import * as logOutActions from '../../redux/ModalLogout/ModalLogoutActions';
class Header extends Component {
  state = {};

  render() {
    const { windowWidth, isModalLogoutOpen, openModal } = this.props;
    return (
      <header className={css.header}>
        <Logo />
        {windowWidth > 320 && <Goal />}
        {windowWidth > 1279 && <ProgressBar />}
        <User isModalLogoutOpen={isModalLogoutOpen} openModal={openModal} />
      </header>
    );
  }
}

const MSTP = store => ({
  isModalLogoutOpen: logOutSelector.isOpen(store),
})

const MDTP = dispatch => ({
  openModal: e => dispatch(logOutActions.openModal(e)),

})

export default connect(MSTP, MDTP)(Header);
// export default windowSize(Header);
