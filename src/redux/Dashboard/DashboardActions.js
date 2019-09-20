export const Type = {
  TASKLIST_GET_START: 'TASKLIST_GET_START',
  TASKLIST_GET_SUCCESS: 'TASKLIST_GET_SUCCESS',
  TASKLIST_GET_ERROR: 'TASKLIST_GET_ERROR',

  GOAL_GET_START: 'GOAL_GET_START',
  GOAL_GET_SUCCESS: 'GOAL_GET_SUCCESS',
  GOAL_GET_ERROR: 'GOAL_GET_ERROR',
};

// TASK LIST ACTIONS
export const getTaskListStart = () => ({
  type: Type.TASKLIST_GET_START,
});

export const getTaskListSuccess = tasks => ({
  type: Type.TASKLIST_GET_SUCCESS,
  payload: {
    tasks,
  },
});

export const getTaskListError = error => ({
  type: Type.TASKLIST_GET_ERROR,
  payload: {
    error,
  },
});

// GOAL ACTIONS
export const getGoalStart = () => ({
  type: Type.GOAL_GET_START,
});

export const getGoalSuccess = goal => ({
  type: Type.GOAL_GET_SUCCESS,
  payload: {
    goal,
  },
});

export const getGoalError = error => ({
  type: Type.GOAL_GET_ERROR,
  payload: {
    error,
  },
});
