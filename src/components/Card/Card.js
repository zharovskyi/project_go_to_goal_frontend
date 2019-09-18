import React, { Component } from 'react';
import styles from './Card.module.css';
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';

class Card extends Component {
  state = {
    isActive: false,
  };

  // handleCheckedToggle = () => {
  //   if (this.prevState.isChecked !== this.state.isChecked) {
  //     this.setState({ isChecked: true });
  //   }
  // };

  render() {
    // const { isChecked } = this.state;
    return (
      <li className={styles.cardLi}>
        <CardBody />
        <CardFooter />
      </li>
    );
  }
}

export default Card;
