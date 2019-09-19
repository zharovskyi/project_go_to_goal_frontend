import React, { Component } from 'react';
import styles from './ActiveTaskList.module.css';
import Card from '../Card/Card';

class ActiveTaskList extends Component {
  state = {};

  render() {
    return (
      <>
        <ul className={styles.activeCards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </>
    );
  }
}

export default ActiveTaskList;
