import React, { Component } from 'react';
import styles from './ActiveTaskList.module.css';
// import Card from '../Card/Card';

class ActiveTaskList extends Component {
  state = {};

  render() {
    return (
      <>
        <ul className={styles.activeCards}>
          {/* <Card /> */}
          <li className={styles.activeTaskCard}> </li>
          <li className={styles.activeTaskCard}> </li>
          <li className={styles.activeTaskCard}> </li>
          <li className={styles.activeTaskCard}> </li>
          <li className={styles.activeTaskCard}> </li>
          <li className={styles.activeTaskCard}> </li>
          <li className={styles.activeTaskCard}> </li>
          <li className={styles.activeTaskCard}> </li>
        </ul>
      </>
    );
  }
}

export default ActiveTaskList;
