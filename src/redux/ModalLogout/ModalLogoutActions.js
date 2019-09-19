export const Type = {
  MODAL_LOGOUT_OPEN: 'MODAL_LOGOUT_OPEN',
  MODAL_LOGOUT_CLOSE: 'MODAL_LOGOUT_CLOSE',
};
export const openModal = () => ({
  type: Type.MODAL_LOGOUT_OPEN,
});
export const closeModal = () => ({
  type: Type.MODAL_LOGOUT_CLOSE,
});
