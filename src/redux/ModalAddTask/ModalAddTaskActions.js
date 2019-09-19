export const Type = {
  MODAL_ADD_TASK_OPEN: 'MODAL_ADD_TASK_OPEN',
  MODAL_ADD_TASK_CLOSE: 'MODAL_ADD_TASK_CLOSE',
  ADD_TASK_SUCCESS: 'ADD_TASK_SUCCESS',
  ADD_TASK_ERROR: 'ADD_TASK_ERROR',
};

export const openModal = () => ({
  type: Type.MODAL_ADD_TASK_OPEN,
});

export const closeModal = () => ({
  type: Type.MODAL_ADD_TASK_CLOSE,
});

/*
 * action for create task operation
 */

export const postSuccessModal = post => ({
  type: Type.ADD_TASK_SUCCESS,
  post: {
    post,
  },
});

export const postErrorModal = error => ({
  type: Type.ADD_TASK_ERROR,
  post: {
    error,
  },
});
