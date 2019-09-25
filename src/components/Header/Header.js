import React from 'react';
import { connect } from 'react-redux';

// style & npm
import css from './Header.module.css';

// components
import Logo from '../Logo/Logo';
import Goal from '../Goal/Goal';
import User from '../User/User';
import ProgressBar from '../ProgressBar/ProgressBar';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';

const Header = ({ goal }) => {
  const windowWidth = document.documentElement.clientWidth;
  return (
    <div className={css.bg}>
      <header className={css.header}>
        <Logo />
        <div className={css.center}>
          {goal !== null && (windowWidth > 320 && <Goal />)}
          {goal !== null && (windowWidth > 1279 && <ProgressBar />)}
        </div>
        <User />
      </header>
    </div>
  );
};
const MSTP = s => ({
  goal: dashboardSelectors.getGoal(s),
});
export default connect(
  MSTP,
  null,
)(Header);
