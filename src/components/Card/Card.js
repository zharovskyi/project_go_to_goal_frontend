import React, { Component } from 'react';
import styles from './Card.module.css';
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
  }

  handleCheckedToggle = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }));
  };

  render() {
    console.log(this.state);
    const { isChecked } = this.state;
    return (
      <li className={styles.cardLi}>
        <CardBody
          onChangeToggle={this.handleCheckedToggle}
          isChecked={isChecked}
        />
        <CardFooter />
      </li>
    );
  }
}

export default Card;
