import { toast } from 'react-toastify';
import React from 'react';

import {
  getTaskListStart,
  getTaskListSuccess,
  getTaskListError,
  getGoalStart,
  getGoalSuccess,
  getGoalError,
} from './DashboardActions';

import * as apiServices from '../../services/api';

export const getTasksOperation = token => dispatch => {
  dispatch(getTaskListStart());
  apiServices
    .getTasks('tasks', token)
    .then(response => {
      dispatch(getTaskListSuccess(response.data.tasks));
    })
    .catch(error => {
      dispatch(getTaskListError(error));
    });
};

export const getGoalOperation = token => dispatch => {
  dispatch(getGoalStart());

  apiServices
    .getGoal('goals', token)
    .then(response => {
      dispatch(
        getGoalSuccess(
          response.data.goals
            .sort((createdAt1, createdAt2) => {
              if (createdAt1 < createdAt2) {
                return -1;
              }
              if (createdAt1 > createdAt2) {
                return 1;
              }
              return 0;
            })
            .find(goal => !goal.isDone),
        ),
      );
    })
    .catch(error => {
      dispatch(getGoalError(error));
    });
};

export const getErrorOperation = errors => {
  errors.map(error =>
    toast.error(
      error !== null ? (
        <div>
          {error.name}: {error.message}
          <br />
          <br />
          {error.config !== undefined &&
            `METHOD: ${error.config.method}
        <br />
        <br />`}
          {error.config !== undefined && `URL: ${error.config.url}`}
        </div>
      ) : (
        ''
      ),
      {
        autoClose: false,
        position: toast.POSITION.BOTTOM_RIGHT,
      },
    ),
  );
  // dispatch([]);
};
