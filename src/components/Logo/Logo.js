import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.png';
import style from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="#" className={style.logo}>
      <img src={LogoImg} alt="logo" />
    </Link>
  );
};
export default Logo;
