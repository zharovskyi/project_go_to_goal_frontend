import { Type } from './ModalCongratsActions';

export const openCloseReducer = (prevState = false, action) => {
  switch (action.type) {
    case Type.MODAL_CONGRATS_OPEN:
      return true;
    case Type.MODAL_CONGRATS_CLOSE:
      return false;

    default:
      return prevState;
  }
};

export const w = () => {};
