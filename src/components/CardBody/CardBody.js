import React from 'react';
// import classNames from 'classnames/bind';
import styles from './CardBody.module.css';
import ToggleButton from '../ToggleButton/ToggleButton';
import { ReactComponent as GiftIMG } from '../../assets/icons/gift.svg';

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
        <GiftIMG />
        <p className={styles.points_txt_p}>{pointsS} балів</p>
        <ToggleButton onChangeToggle={onChangeToggle} />
      </div>
    </>
  );
};

export default CardBody;
