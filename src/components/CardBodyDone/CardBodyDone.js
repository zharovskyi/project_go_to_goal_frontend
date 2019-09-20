import React from 'react';
// import classNames from 'classnames/bind';
import styles from './CardBodyDone.module.css';
import ToggleButton from '../ToggleButton/ToggleButton';
import { ReactComponent as GiftIMG } from '../../assets/icons/gift.svg';
import { ReactComponent as CloseSVG } from '../../assets/icons/close.svg';

const pointsS = 500;

const CardBody = ({ points, isDone, createdAt, isChecked }) => {
  return (
    <>
      <div className={isChecked ? styles.isChecked : styles.bodyCard}>
        <GiftIMG className={styles.SVG_gift} />
        {/* <div className={styles.CardBody_div_txt}> */}
        <p className={styles.points_txt_number}>{pointsS}</p>
        {/* <p className={styles.points_txt_number}>{points}</p> */}
        <p className={styles.points_txt_p}>балів</p>
        {/* </div> */}
        <p className={styles.time_p}> 20 вересня 2019 </p>
        {/* <p className={styles.time_p}>{createdAt}</p> */}
      </div>
    </>
  );
};

export default CardBody;

// createdAt - for date completed
