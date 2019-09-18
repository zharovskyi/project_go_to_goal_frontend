export const Type = {
  MODAL_ADD_TASK_OPEN: 'MODAL_ADD_TASK_OPEN',
  MODAL_ADD_TASK_CLOSE: 'MODAL_ADD_TASK_CLOSE',
};

export const openModal = isOpen => ({
  type: Type.MODAL_ADD_TASK_OPEN,
  payload: { isOpen },
});

export const closeModal = isOpen => ({
  type: Type.MODAL_ADD_TASK_CLOSE,
  payload: { isOpen },
});
