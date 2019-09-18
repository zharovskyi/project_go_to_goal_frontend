import { Type } from './ModalRegistrationActions';

export const openCloseReducer = (prevState = false, action) => {
  switch (action.type) {
    case Type.MODAL_REGISTRATION_OPEN:
      return true;
    case Type.MODAL_REGISTRATION_CLOSE:
      return false;

    default:
      return prevState;
  }
};

export const w = () => {};
