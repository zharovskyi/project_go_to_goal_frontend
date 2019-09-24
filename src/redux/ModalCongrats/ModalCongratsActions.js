export const Type = {
  MODAL_CONGRATS_OPEN: 'MODAL_CONGRATS_OPEN',
  MODAL_CONGRATS_CLOSE: 'MODAL_CONGRATS_CLOSE',
  MODAL_CONGRATS_START: 'MODAL_CONGRATS_START',
  MODAL_CONGRATS_SUCCESS: 'MODAL_CONGRATS_SUCCESS',
  MODAL_CONGRATS_ERROR: 'MODAL_CONGRATS_ERROR',
};

export const openModal = () => ({
  type: Type.MODAL_CONGRATS_OPEN,
});

export const closeModal = () => ({
  type: Type.MODAL_CONGRATS_CLOSE,
});

/*
 * actions for deleting target
 */
export const modalStart = () => ({
  type: Type.MODAL_CONGRATS_START,
});
export const modalSuccess = response => ({
  type: Type.MODAL_CONGRATS_SUCCESS,
  payload: {
    response,
  },
});
export const modalError = error => ({
  type: Type.MODAL_CONGRATS_ERROR,
  payload: {
    error,
  },
});
