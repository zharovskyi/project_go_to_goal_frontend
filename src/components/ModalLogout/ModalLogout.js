import React from 'react';
import style from './ModalLogout.module.css';

const ModalLogout = ({ onClose }) => {
  return (
    <div className={style.modalContent}>
      <h2 className={style.h2}>Ви впевнені, що хочете покинути сторінку?</h2>
      <div className={style.btnConteiner}>
        <button type="button" className={style.btn}>
          ТАК
        </button>
        <button type="button" className={style.btn} onClick={onClose}>
          НІ
        </button>
      </div>
    </div>
  );
};
export default ModalLogout;
