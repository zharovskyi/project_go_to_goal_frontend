import { Type } from './ModalLogoutActions';

export const openCloseReducer = (prevState = 0, action) => {
  switch (action.type) {
    case Type.MODAL_LOGOUT_OPEN:
      return true;
    case Type.MODAL_LOGOUT_CLOSE:
      return false;

    default:
      return prevState;
  }
};

export const w = () => {};
