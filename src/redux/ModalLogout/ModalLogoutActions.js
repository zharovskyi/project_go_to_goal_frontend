export const Type = {
  MODAL_REGISTRATION_OPEN: 'MODAL_REGISTRATION_OPEN',
  MODAL_REGISTRATION_CLOSE: 'MODAL_REGISTRATION_CLOSE',
};

export const openModal = () => ({
  type: Type.MODAL_REGISTRATION_OPEN,
});

export const closeModal = () => ({
  type: Type.MODAL_REGISTRATION_CLOSE,
});
