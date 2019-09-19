export const Type = {
  MODAL_LOGOUT_OPEN: 'MODAL_LOGOUT_OPEN',
  MODAL_LOGOUT_CLOSE: 'MODAL_LOGOUT_CLOSE',
};

export const openModal = e => ({
  type: Type.MODAL_LOGOUT_OPEN,
  isModalLogoutOpen: true,
});

export const closeModal = e => ({
  type: Type.MODAL_LOGOUT_CLOSE,
  isModalLogoutOpen: false,
});
