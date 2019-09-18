import { Type } from './ModalAddTaskActions';

export const openCloseReducer = (prevState = 0, action) => {
  switch (action.type) {
    case Type.MODAL_ADD_TASK_OPEN:
    case Type.MODAL_ADD_TASK_CLOSE:
      return !prevState.modals.isModalAddTaskOpen;

    default:
      return prevState;
  }
};

export const w = () => {};
