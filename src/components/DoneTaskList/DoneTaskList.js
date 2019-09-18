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
          <li className={styles.doneTaskCard}> </li>
          <li className={styles.doneTaskCard}> </li>
          <li className={styles.doneTaskCard}> </li>
          <li className={styles.doneTaskCard}> </li>
          <li className={styles.doneTaskCard}> </li>
          <li className={styles.doneTaskCard}> </li>
        </ul>
        <div className={styles.buttonBlock}>
          <button type="button" className={styles.button}>
            &#10507;
          </button>
        </div>
      </>
    );
  }
}

export default DoneTaskList;
