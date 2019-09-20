import React from 'react';
import style from './ModalLogout.module.css';
import { connect } from 'react-redux';
import * as api from '../../redux/ModalLogout/ModalLogoutOperations';
import * as ModalLogoutActions from '../../redux/ModalLogout/ModalLogoutActions';

const ModalLogout = ({ onClose, logOut }) => {
  return (
    <div className={style.modalContent}>
      <h2 className={style.h2}>Ви впевнені, що хочете покинути сторінку?</h2>
      <div className={style.btnConteiner}>
        <button className={style.btn} onClick={logOut}>
          ТАК
        </button>
        <button className={style.btn} onClick={onClose}>
          НІ
        </button>
      </div>
    </div>
  );
};

const MDTP = dispatch => ({
  logOut: session => dispatch(ModalLogoutActions.logOutSucsses(session)),
});
export default connect(
  null,
  MDTP,
)(ModalLogout);
// export default ModalLogout;
