import React from 'react';
import style from './User.module.css';
import { ReactComponent as LogoOut } from '../../assets/images/logout.svg';
import ModalLogout from '../ModalLogout/ModalLogout';
import Avatar from '../../assets/images/avatar.jpeg';

const User = ({ isModalLogoutOpen, openModal }) => {
  return (
    <>
      <div className={style.userInfo}>
        <img src={Avatar} width="55" height="55" alt="Вася Пупкін" />
        <span className={style.userName}>Вася</span>
        <span className={style.userAge}>30 років</span>
      </div>
      <button type="button" className={style.btn} onClick={openModal} isOpen={isModalLogoutOpen}>

        <LogoOut />
        {/* if (isOpen) {
          <ModalLogout />
        } */}

      </button>
    </>
  );
};


export default User;
