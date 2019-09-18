import React from 'react';
import style from './User.module.css';
import { ReactComponent as LogoOut } from '../../assets/images/logout.svg';
import LogOutModal from './LogOutModal/LogOutModal';

const User = () => {
  return (
    <div>
      Вася, 30 років
      <button className={style.btn}>
        <LogoOut />
        {/* <LogOutModal /> */}
      </button>
    </div>
  );
};
export default User;
