export const Type = {
  MODAL_ADD_TASK_OPEN: 'MODAL_ADD_TASK_OPEN',
  MODAL_ADD_TASK_CLOSE: 'MODAL_ADD_TASK_CLOSE',
};

export const openModal = () => ({
  type: Type.MODAL_ADD_TASK_OPEN,
});

export const closeModal = () => ({
  type: Type.MODAL_ADD_TASK_CLOSE,
});
