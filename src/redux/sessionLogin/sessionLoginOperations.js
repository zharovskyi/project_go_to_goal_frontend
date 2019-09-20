import { loginRequest, loginSuccess, loginError } from './sessionLoginActions';
import { setLogin } from '../../services/api';

export const login = credentials => dispatch => {
  dispatch(loginRequest());

  setLogin(credentials)
    .then(response => {
      console.log('response :', response);
      dispatch(loginSuccess(response.data.user));
    })
    .catch(error => {
      console.log('error :', error);
      dispatch(loginError(error));
    });
};

export const a = () => {};
