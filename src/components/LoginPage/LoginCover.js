import React from 'react';
import s from '../../pages/LoginPage/LoginPage.module.css';
import coverImg from '../../assets/images/login-page-cover@1X.png';

const LoginCover = () => {
  return (
    <div className={s.cover}>
      <img src={coverImg} alt="cover" className={s.bg_cover} />
    </div>
  );
};

export default LoginCover;
