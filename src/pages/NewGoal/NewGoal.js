import React from 'react';
import styles from './NewGoal.module.css';

const NewGoal = () => {
  return (
    <div className={styles.new_goal_section}>
      <h2 className={styles.new_goal_title}>Моя мета</h2>
      <div className={styles.container}>
        <button type="button" className={styles.button}>
          <div className={styles.button_overlay}>
            <div className={styles.button_icon}>
              <svg className={styles.icon}>
                <use href="../../images/add-plus-button.svg" />
              </svg>
            </div>
          </div>
          <p className={styles.button_text}> Додай мету</p>
        </button>
        <div className={styles.new_goal_info}>
          <p>
            Cпочатку вам треба узгодити мету, після чого можна буде слідкувати
            за прогресом виконання.
          </p>
          <p>Подобається ідея?</p>
          <p className={styles.arrow_icon}>
            Тоді не барись, а натискай на кнопку!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewGoal;
