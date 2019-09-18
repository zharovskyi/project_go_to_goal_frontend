import React from 'react';
import styles from './ToggleButton.module.css';

const ToggleButton = ({ isChecked }) => {
  return (
    <div className={styles.div}>
      <input
        type="checkbox"
        // checked={isChecked}
        // onChange={this.handleCheckedToggle}
      />
    </div>
  );
};

export default ToggleButton;
