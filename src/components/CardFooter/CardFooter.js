import React from 'react';
import styles from './CardFooter.module.css';

const CardFooter = ({ title, deadline }) => {
  return (
    <div className={styles.cardFooter_div}>
      {/* <p className={styles.CardFooter_task}>Прдлвнетпрвдулр овнгзін</p> */}
      <p className={styles.CardFooter_task}>{title}</p>
      {/* <p className={styles.CardFooter_timeFrames}>17.00-20.00</p> */}
      <p className={styles.CardFooter_timeFrames}>{deadline}</p>
    </div>
  );
};

export default CardFooter;
