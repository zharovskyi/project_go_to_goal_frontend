import React from 'react';
import styles from './CardBody.module.css';
import ToggleButton from '../ToggleButton/ToggleButton';
import { ReactComponent as GiftIMG } from '../../assets/icons/gift.svg';

const pointsS = 500;

const CardBody = ({ points, isDone, dateInDone, isActive }) => {
  return (
    <>
      <div className={styles.bodyCard}>
        <GiftIMG />
        <p className={styles.points_txt_p}>{pointsS} балів</p>
        <ToggleButton />
      </div>
    </>
  );
};

export default CardBody;
