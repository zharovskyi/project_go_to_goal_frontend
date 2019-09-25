import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import style from './User.module.css';
import Avatar from '../../assets/images/avatar.jpeg';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';
import * as logoutActions from '../../redux/ModalLogout/ModalLogoutActions';

const User = ({ user, openModalLogout }) => {
  const { name, age } = user;

  return (
    <>
      <div className={style.userInfo}>
        <img src={Avatar} width="25" height="25" alt="Вася Пупкін" />
        <div className={style.colum}>
          <span className={style.userName}>{name}</span>
          <span className={style.userAge}>{age} років</span>
        </div>
        <button type="button" className={style.btn} onClick={openModalLogout} />
      </div>
    </>
  );
};

const MSTP = s => ({
  user: dashboardSelectors.getUser(s),
});

const MDTP = dispatch => ({
  openModalLogout: e => dispatch(logoutActions.openModal(e)),
});

User.propTypes = {
  openModalLogout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect(
  MSTP,
  MDTP,
)(User);
