import React from 'react';
import styles from './CardFooter.module.css';

const CardFooter = ({ title, time }) => {
  return (
    <div className={styles.cardFooter_div}>
      <p className={styles.CardFooter_task}>Прибрати в кімнаті</p>
      {/* <p className={styles.CardFooter_task}>{title}</p> */}
      <p className={styles.CardFooter_timeFrames}>17.00-20.00</p>
      {/* <p className={styles.CardFooter_timeFrames}>{time}</p> */}
    </div>
  );
};

export default CardFooter;
