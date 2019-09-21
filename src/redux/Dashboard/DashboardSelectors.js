// import { createSelector } from 'reselect';

export const getTasks = store => store.tasks;

export const getGoal = store => store.goal;

export const getToken = store => store.session.token;

export const hasDashboardError = store => store.dashboardErrors.length > 0;

export const getdDashboardErrors = store => store.dashboardErrors;
