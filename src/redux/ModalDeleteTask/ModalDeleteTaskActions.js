export const Type = {
  MODAL_DELETE_TASK_OPEN: 'MODAL_DELETE_TASK_OPEN',
  MODAL_DELETE_TASK_CLOSE: 'MODAL_DELETE_TASK_CLOSE',
  // DELETE_TASK_START: 'DELETE_TASK_START',
  // DELETE_TASK_SUCCESS: 'DELETE_TASK_SUCCESS',
  // DELETE_TASK_ERROR: 'DELETE_TASK_ERROR',
};

export const openModal = () => ({
  type: Type.MODAL_DELETE_TASK_OPEN,
});

export const closeModal = () => ({
  type: Type.MODAL_DELETE_TASK_CLOSE,
});

/*
 * Delete Task
 */
// export const deleteTaskStart = () => ({
//   type: Type.DELETE_TASK_START,
// });

// export const deleteTaskSuccess = id => ({
//   type: Type.DELETE_TASK_SUCCESS,
//   payload: {
//     id,
//   },
// });

// export const deleteTaskError = error => ({
//   type: Type.DELETE_TASK_ERROR,
//   payload: {
//     error,
//   },
// });
