import { Type } from '../ModalCongrats/ModalCongratsActions';

export const goalReducer = (prevState = null, { type, payload }) => {
  switch (type) {
    case Type.MODAL_CONGRATS_START:
      return true;
    case Type.MODAL_CONGRATS_SUCCESS:
      return false;

    default:
      return prevState;
  }
};
export const w = () => {};
