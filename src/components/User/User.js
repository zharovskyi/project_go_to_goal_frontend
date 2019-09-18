import React from 'react';
import style from './User.module.css';
import { ReactComponent as LogoOut } from '../../assets/images/logout.svg';
import LogOutModal from '../LogOutModal/LogOutModal';
import Avatar from '../../assets/images/avatar.jpeg';

const User = () => {
  return (
    <div className={style.userInfo}>
      <img src={Avatar} width='55' height='60' alt="Logo" />
      <span className={style.userName}>Вася,</span>
      <span className={style.userAge}>30 років</span>

      <button className={style.btn}>
        <LogoOut />
        {/* <LogOutModal /> */}
      </button>
    </div>
  );
};
export default User;
