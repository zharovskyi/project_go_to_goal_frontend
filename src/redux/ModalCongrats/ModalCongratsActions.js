export const Type = {
  MODAL_CONGRATS_OPEN: 'MODAL_CONGRATS_OPEN',
  MODAL_CONGRATS_CLOSE: 'MODAL_CONGRATS_CLOSE',
};

export const openModal = () => ({
  type: Type.MODAL_CONGRATS_OPEN,
});

export const closeModal = () => ({
  type: Type.MODAL_CONGRATS_CLOSE,
});
