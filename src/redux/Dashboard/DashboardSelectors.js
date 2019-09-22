// import { createSelector } from 'reselect';

export const getTasks = store => store.tasks;

export const getGoal = store => store.goal;

export const getToken = store => store.session.token;

export const hasDashboardError = store => store.dashboardErrors.length > 0;

export const getDashboardErrors = store => store.dashboardErrors;

export const getUser = store => store.session.user;

export const getGoalPoints = store => store.goal.points;

// export const getUserPoints = store => store.user.scores;

export const getUserPoints = store =>
  store.tasks
    .filter(task => task.isDone)
    .reduce((total, task) => total + task.points, 0);
