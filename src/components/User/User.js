import React from 'react';
import { connect } from 'react-redux';
import style from './User.module.css';
import { ReactComponent as LogoOut } from '../../assets/images/logout.svg';
// import LogOutModal from '../LogOutModal/LogOutModal';
import Avatar from '../../assets/images/avatar.jpeg';

import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';

const User = ({ user }) => {
  const { name, age } = user;
  return (
    <>
      <div className={style.userInfo}>
        <img src={Avatar} width="55" height="55" alt="Вася Пупкін" />
        <span className={style.userName}>{name}</span>
        <span className={style.userAge}>{age} років</span>
      </div>
      <button type="button" className={style.btn}>
        <LogoOut />
        {/* <LogOutModal /> */}
      </button>
    </>
  );
};

const mapStateToProps = store => ({
  user: dashboardSelectors.getUser(store),
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
