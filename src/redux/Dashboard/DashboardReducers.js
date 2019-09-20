import { Type } from './DashboardActions';

export const tasksReducer = (prevState = [], action) => {
  switch (action.type) {
    case Type.DELETE_CARD_SUCCESS:
      return prevState.filter(el => el._id !== action.payload._id);
    default:
      return prevState;
  }
};
export const errorsModalDeleteReducer = (prevState = null, action) => {
  switch (action.type) {
    case Type.DELETE_CARD_ERROR:
      return action.payload.error;
    // case Type.DELETE_CARD_SUCCESS
    default:
      return prevState;
  }
};
export const idForDeleteTaskReducer = (prevState = null, action) => {
  switch (action.type) {
    case Type.DELETE_CARD_SUCCESS:
      return action.payload._id;
    default:
      return prevState;
  }
};
