import React from 'react';
import styles from './ToggleButton.module.css';

const ToggleButton = ({ onChangeToggle }) => {
  return (
    <div className={styles.div}>
      <input
        type="checkbox"
        // checked={onChangeToggle}
        onClick={onChangeToggle}
      />
    </div>
  );
};

export default ToggleButton;
