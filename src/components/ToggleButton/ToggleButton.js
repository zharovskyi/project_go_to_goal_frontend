import React from 'react';
import styles from './ToggleButton.module.css';

const ToggleButton = ({ onChangeToggle, checked }) => {
  return (
    <div className={styles.div}>
      <input type="checkbox" checked={checked} onClick={onChangeToggle} />
    </div>
  );
};

export default ToggleButton;
