import React from 'react';
import PropTypes from 'prop-types';

import style from './User.module.css';
import { ReactComponent as LogoOut } from '../../assets/images/logout.svg';
import Avatar from '../../assets/images/avatar.jpeg';

const User = ({ handleOpen, userAge, userName }) => {
  return (
    <>
      <div className={style.userInfo}>
        <img src={Avatar} width="55" height="55" alt="Вася Пупкін" />
        <div className={style.colum}>
          <span className={style.userName}>{userName}</span>
          <span className={style.userAge}>{userAge} років</span>
        </div>
      </div>
      <button type="button" className={style.btn} onClick={handleOpen}>
        <LogoOut />
      </button>
    </>
  );
};

User.propTypes = {
  userAge: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default User;
