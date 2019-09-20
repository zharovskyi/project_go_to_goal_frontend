import React, { Component } from 'react';
import styles from './DoneTaskList.module.css';
// import Card from '../Card/Card';

class DoneTaskList extends Component {
  state = {};

  render() {
    return (
      <>
        <ul className={styles.doneCards}>
          {/* <Card /> */}
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
