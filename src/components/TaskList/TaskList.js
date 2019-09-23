import React from 'react';
import styles from './TaskList.module.css';
import ActiveTaskList from '../ActiveTaskList/ActiveTaskList';
import DoneTaskList from '../DoneTaskList/DoneTaskList';
import CreateTaskButton from '../CreateTaskButton/CreateTaskButton';

const TaskList = (activePosts, getGoal) => {
  return (
    <div className={styles.taskList}>
      <CreateTaskButton />
      <h2 className={styles.dailyTasks}>Мої завдання:</h2>
      <h2 className={styles.blocksTitles}>Сьогодні</h2>
      <ActiveTaskList activePosts={activePosts} getGoal={getGoal} />
      <h2 className={styles.blocksTitles}>Виконано</h2>
      <DoneTaskList />
    </div>
  );
};

export default TaskList;
