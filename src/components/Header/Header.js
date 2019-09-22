import React, { Component } from 'react';
import windowSize from 'react-window-size';
import { connect } from 'react-redux';
import { compose } from 'redux';
import css from './Header.module.css';
import Logo from '../Logo/Logo';
import Goal from '../Goal/Goal';
import ProgressBar from '../ProgressBar/ProgressBar';
import User from '../User/User';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';

class Header extends Component {
  state = {};

  render() {
    const { windowWidth, goal } = this.props;
    return (
      <header className={css.header}>
        <Logo />
        {windowWidth > 320 && goal && <Goal />}
        {windowWidth > 1279 && goal && <ProgressBar />}
        <User />
      </header>
    );
  }
}

const mapStateToProps = store => ({
  goal: dashboardSelectors.getGoal(store),
});
const mapDispatchToProps = {};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  windowSize,
)(Header);
