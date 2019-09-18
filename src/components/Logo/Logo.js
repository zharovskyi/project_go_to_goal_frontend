import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../assets/images/logoGo.svg';
import { ReactComponent as Goal } from '../../assets/images/Goal.svg';
import style from './Logo.module.css';

const Logo = () => {
    return (
        <Link to="#" className={style.logo}>
            <LogoSvg />
            <span className={style.to}>
                &nbsp; to  &nbsp;</span><Goal />
        </Link>
    );
};
export default Logo;