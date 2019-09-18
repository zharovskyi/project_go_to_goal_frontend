import React from 'react';
import style from './LogOutModal.module.css';

const LogOutModal = () => {
  return (
    <div className={style.basicLightbox}>
      <div className={style.modalContent}>
        <h2 className={style.h2}>Ви впевнені, що хочете покинути сторінку?</h2>
        <div className={style.btnConteiner}>
          <button className={style.btn}>ТАК</button>
          <button className={style.btn}>НІ</button>
        </div>
      </div>
    </div>
  );
};
export default LogOutModal;
