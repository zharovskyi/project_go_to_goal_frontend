import React, { Component } from 'react';
import styles from './DoneTaskList.module.css';

class DoneTaskList extends Component {
  state = {};

  render() {
    return (
      <>
        <ul className={styles.doneCards}>
          <li className={styles.doneTaskCard}> </li>
          <li className={styles.doneTaskCard}> </li>
        </ul>
      </>
    );
  }
}

export default DoneTaskList;
