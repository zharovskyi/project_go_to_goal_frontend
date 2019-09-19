import React, { Component } from 'react';
import windowSize from 'react-window-size';
import { connect } from 'react-redux';
import { compose } from 'redux';
import css from './Header.module.css';
import Logo from '../Logo/Logo';
import Goal from '../Goal/Goal';
import ProgressBar from '../ProgressBar/ProgressBar';
import User from '../User/User';
import * as headerSelectors from '../../redux/Header/HeaderSelectors';

class Header extends Component {
  state = {};

  render() {
    const {
      windowWidth,
      goalPoints,
      goalTitle,
      taskPoints,
      percent,
    } = this.props;
    return (
      <header className={css.header}>
        <Logo />
        {windowWidth > 320 && <Goal title={goalTitle} />}
        {windowWidth > 1279 && (
          <ProgressBar
            goalPoints={goalPoints}
            taskPoints={taskPoints}
            percent={percent}
          />
        )}
        <User />
      </header>
    );
  }
}

const MSTP = store => ({
  goalPoints: headerSelectors.getGoalPoints(store),
  taskPoints: headerSelectors.getTasksPoints(store),
  goalTitle: headerSelectors.getTitle(store),
  percent: headerSelectors.getPercent(store),
});
const MDTP = dispatch => ({});

export default compose(
  connect(
    MSTP,
    MDTP,
  ),
  windowSize,
)(Header);
