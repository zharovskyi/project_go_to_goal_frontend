import React from 'react';
// import classNames from 'classnames/bind';
import styles from './CardBody.module.css';
import ToggleButton from '../ToggleButton/ToggleButton';
import { ReactComponent as GiftIMG } from '../../assets/icons/gift.svg';
import { ReactComponent as CloseSVG } from '../../assets/icons/close.svg';

const pointsS = 500;

const CardBody = ({
  points,
  isDone,
  dateInDone,
  onChangeToggle,
  isChecked,
}) => {
  return (
    <>
      <div className={isChecked ? styles.isChecked : styles.bodyCard}>
        <button type="button" className={styles.SVG_close_btn}>
          <CloseSVG className={styles.SVG_close} />
        </button>
        <GiftIMG className={styles.SVG_gift} />
        <div className={styles.CardBody_div_txt}>
          <p className={styles.points_txt_number}>{pointsS}</p>
          <p className={styles.points_txt_p}>балів</p>
        </div>
        <ToggleButton onChangeToggle={onChangeToggle} />
        {/* <p>Time now {dateInDone}</p> */}
      </div>
    </>
  );
};

export default CardBody;
