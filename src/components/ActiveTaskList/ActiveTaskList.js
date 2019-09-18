import React, { Component } from 'react';
import styles from './ActiveTaskList.module.css';

class ActiveTaskList extends Component {
  state = {};

  render() {
    return (
      <>
        <ul className={styles.activeCards}>
          <li className={styles.activeTaskCard}> </li>
          <li className={styles.activeTaskCard}> </li>
          <li className={styles.activeTaskCard}> </li>
        </ul>
      </>
    );
  }
}

export default ActiveTaskList;
