import React from 'react';
import styles from './Card.module.css';
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';

const Card = () => {
  return (
    <li className={styles.cardLi}>
      <CardBody />
      <CardFooter />
    </li>
  );
};

export default Card;
