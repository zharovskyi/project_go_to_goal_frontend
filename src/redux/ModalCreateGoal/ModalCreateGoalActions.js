export const Type = {
  MODAL_CREATE_GOAL_OPEN: 'MODAL_CREATE_GOAL_OPEN',
  MODAL_CREATE_GOAL_CLOSE: 'MODAL_CREATE_GOAL_CLOSE',
  ADD_GOAL_SUCCESS: 'ADD_GOAL_SUCCESS',
  ADD_GOAL_ERROR: 'ADD_GOAL_ERROR',
};

export const openModal = () => ({
  type: Type.MODAL_CREATE_GOAL_OPEN,
});

export const closeModal = () => ({
  type: Type.MODAL_CREATE_GOAL_CLOSE,
});

export const addGoalSuccess = goal => ({
  type: Type.ADD_GOAL_SUCCESS,
  payload: {
    goal,
  },
});

export const addGoalError = error => ({
  type: Type.ADD_GOAL_ERROR,
  payload: {
    error,
  },
});
