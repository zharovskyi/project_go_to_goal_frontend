// CARD DELETE
export const Type = {
  MODAL_DELETE_TASK_OPEN: 'MODAL_DELETE_TASK_OPEN',
  MODAL_DELETE_TASK_CLOSE: 'MODAL_DELETE_TASK_CLOSE',
  DELETE_CARD_SUCCESS: 'DELETE_CARD_SUCCESS',
  DELETE_CARD_ERROR: 'DELETE_CARD_ERROR',
};

export const removeCardsSuccess = _id => ({
  type: Type.DELETE_CARD_SUCCESS,
  payload: {
    _id,
  },
});

export const removeCardsError = error => ({
  type: Type.DELETE_CARD_ERROR,
  payload: {
    error,
  },
});
// CARD DELETE END
