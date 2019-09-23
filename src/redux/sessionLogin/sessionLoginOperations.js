import {
  loginRequest,
  loginSuccess,
  loginError,
  refreshRequest,
  refreshSuccess,
  refreshError,
  // setAuthToken,
} from './sessionLoginActions';
import { setLogin, setTokenLoginPage } from '../../services/api';
import { getToken } from './sessionLoginSelectors';

export const login = credentials => dispatch => {
  dispatch(loginRequest());

  setLogin(credentials)
    .then(response => {
      // setAuthToken(response.data.token);
      dispatch(loginSuccess(response));
    })
    .catch(error => {
      dispatch(loginError(error));
    });
};

export const refresh = () => (dispatch, getState) => {
  const token = getToken(getState());
  if (!token) return;

  const options = {
    headers: {
      Authorization: token,
    },
  };

  dispatch(refreshRequest());

  setTokenLoginPage(options)
    .then(response => {
      // console.log('token response :', response);
      dispatch(refreshSuccess(response));
    })
    .catch(error => {
      // console.log('token error :', error);
      dispatch(refreshError(error));
    });
};
