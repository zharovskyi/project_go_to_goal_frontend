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
    // const { isActive, title, deadline, points, createdAt, _id } = this.props;
    const { task } = this.props;
    return (
      <li className={styles.cardLi}>
        {task.inActive ? (
          <CardBodyActive
            // onChangeToggle={handleCheckedToggle}
            isDone={task.isDone}
            points={task.points}
            _id={task._id}
          />
        ) : (
          <CardBodyDone
            isDone={task.isDone}
            points={task.points}
            createdAt={task.createdAt}
          />
        )}
        <CardFooter title={task.title} deadline={task.deadline} />
      </li>
    );
  }
}

export default Card;
