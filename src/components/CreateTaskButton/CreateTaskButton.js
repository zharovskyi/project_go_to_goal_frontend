import React from 'react';
import styles from './CreateTaskButton.module.css';

const CreateTaskButton = () => {
  return (
    <div>
      <button type="button" className={styles.button}>
        &#x2b;
      </button>
    </div>
  );
};

export default CreateTaskButton;
