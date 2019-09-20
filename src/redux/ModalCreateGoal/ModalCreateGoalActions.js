export const Type = {
  MODAL_CREATE_GOAL_OPEN: 'MODAL_CREATE_GOAL_OPEN',
  MODAL_CREATE_GOAL_CLOSE: 'MODAL_CREATE_GOAL_CLOSE',
};

export const openModal = () => ({
  type: Type.MODAL_CREATE_GOAL_OPEN,
});

export const closeModal = () => ({
  type: Type.MODAL_CREATE_GOAL_CLOSE,
});
