import { combineReducers } from 'redux';
import { ActionType } from './sessionLoginActions';

const user = (prevState = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
      return payload.response.data.user.userData;

    case ActionType.REFRESH_SUCCESS:
      return payload.response.data.user;

    case ActionType.LOGOUT:
      return null;

    default:
      return prevState;
  }
};

const authenticated = (prevState = false, { type }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
    case ActionType.REFRESH_SUCCESS:
      return true;

    case ActionType.LOGOUT:
      return false;

    default:
      return prevState;
  }
};

const token = (prevState = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
      return payload.response.data.user.token;

    case ActionType.LOGOUT:
      return null;

    default:
      return prevState;
  }
};

const error = (prevState = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_ERROR:
      return payload.error;

    default:
      return prevState;
  }
};

export default combineReducers({
  user,
  authenticated,
  token,
  error,
});
