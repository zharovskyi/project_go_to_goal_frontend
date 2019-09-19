import {
  getTaskListStart,
  getTaskListSuccess,
  getTaskListError,
  getGoalStart,
  getGoalSuccess,
  getGoalError,
} from './DashboardActions';

import * as dashboardSelectors from './DashboardSelectors';

import * as apiServices from '../../services/api';

export const getTasksOperation = () => dispatch => {
  dispatch(getTaskListStart());

  apiServices
    .getTasks('tasks', dashboardSelectors.getToken())
    .then(response => {
      dispatch(getTaskListSuccess(response.data));
    })
    .catch(error => {
      dispatch(getTaskListError(error));
    });
};

export const getGoalOperation = () => dispatch => {
  dispatch(getGoalStart());

  apiServices
    .getGoal('goal', dashboardSelectors.getToken())
    .then(response => {
      dispatch(getGoalSuccess(response.data));
    })
    .catch(error => {
      dispatch(getGoalError(error));
    });
};
