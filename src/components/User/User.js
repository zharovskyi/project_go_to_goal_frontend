import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import style from './User.module.css';
import { ReactComponent as LogoOut } from '../../assets/images/logout.svg';
import Avatar from '../../assets/images/avatar.jpeg';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';

const User = ({ handleOpen, user }) => {
  const { name, age } = user;
  return (
    <>
      <div className={style.userInfo}>
        <img src={Avatar} width="55" height="55" alt="Вася Пупкін" />
        <div className={style.colum}>
          <span className={style.userName}>{name}</span>
          <span className={style.userAge}>{age} років</span>
        </div>
      </div>
      <button type="button" className={style.btn} onClick={handleOpen}>
        <LogoOut />
      </button>
    </>
  );
};

const MSTP = s => ({
  user: dashboardSelectors.getUser(s),
});

User.propTypes = {
  user: PropTypes.object.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default connect(
  MSTP,
  null,
)(User);
