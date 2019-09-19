import React from 'react';
import styles from './CreateTaskButton.module.css';

const CreateTaskButton = () => {
  return (
    <>
      <button type="button" className={styles.button}>
        &#x2b;
      </button>
    </>
  );
};

export default CreateTaskButton;
