import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

// style & npm
import windowSize from 'react-window-size';
import css from './Header.module.css';

// components
import Logo from '../Logo/Logo';
import Goal from '../Goal/Goal';
import User from '../User/User';
import ProgressBar from '../ProgressBar/ProgressBar';

// redux
import * as headerSelectors from '../../redux/Header/HeaderSelectors';
import * as logoutActions from '../../redux/ModalLogout/ModalLogoutActions';
import * as congratsActions from '../../redux/ModalCongrats/ModalCongratsActions';

class Header extends Component {
  state = {};

  render() {
    const {
      windowWidth,
      goalTitle,
      userName,
      userAge,
      percent,
      openModalLogout,
      openModalCongrats,
    } = this.props;
    return (
      <header className={css.header}>
        <Logo />
        {windowWidth > 320 && (
          <Goal
            title={goalTitle}
            handleOpen={openModalCongrats}
            percent={percent}
          />
        )}
        {windowWidth > 1279 && <ProgressBar />}
        <User
          handleOpen={openModalLogout}
          userName={userName}
          userAge={userAge}
        />
      </header>
    );
  }
}
const MSTP = store => ({
  percent: headerSelectors.getPercent(store),
  goalTitle: headerSelectors.getTitle(store),
  userName: headerSelectors.userName(store),
  userAge: headerSelectors.userAge(store),
});

const MDTP = dispatch => ({
  openModalLogout: e => dispatch(logoutActions.openModal(e)),
  openModalCongrats: e => dispatch(congratsActions.openModal(e)),
});

Header.propTypes = {
  goalTitle: PropTypes.string.isRequired,
  windowWidth: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  userAge: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
  openModalLogout: PropTypes.func.isRequired,
  openModalCongrats: PropTypes.func.isRequired,
};

export default compose(
  connect(
    MSTP,
    MDTP,
  ),
  windowSize,
)(Header);
