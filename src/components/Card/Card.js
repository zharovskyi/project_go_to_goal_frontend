import React, { Component } from 'react';
import styles from './Card.module.css';
import CardBodyActive from '../CardBodyActive/CardBodyActive';
import CardBodyDone from '../CardBodyDone/CardBodyDone';
import CardFooter from '../CardFooter/CardFooter';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { isDone: false };
  }

  handleCheckedToggle = () => {
    this.setState(prevState => ({
      isDone: !prevState.isDone,
    }));
  };

  render() {
    const { isDone } = this.state;
    const { isActive, title, deadline, points } = this.props;
    return (
      <li className={styles.cardLi}>
        {isActive ? (
          <CardBodyDone />
        ) : (
          <CardBodyActive
            onChangeToggle={this.handleCheckedToggle}
            isDone={isDone}
            points={points}
          />
        )}
        <CardFooter title={title} deadline={deadline} />
      </li>
    );
  }
}

export default Card;
