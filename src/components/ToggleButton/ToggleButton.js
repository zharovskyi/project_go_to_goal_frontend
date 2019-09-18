import React, { Component } from 'react';
import styles from './ToggleButton.module.css';

export default class ToggleButton extends Component {
  state = {
    isChecked: false,
  };

  // handleCheckedToggle = () => {
  //   if (this.prevState.isChecked !== this.state.isChecked) {
  //     this.setState({ isChecked: true });
  //   }
  // };

  render() {
    // const { isChecked } = this.state;
    return (
      <div className={styles.div}>
        <input
          type="checkbox"
          // checked={isChecked}
          // onChange={this.handleCheckedToggle}
        />
      </div>
    );
  }
}
