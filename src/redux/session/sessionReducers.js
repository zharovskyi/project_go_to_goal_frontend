// import { combineReducers } from 'redux';
// import { Type } from './sessionActions';

// const returnValue = {
//   TRUE: true,
//   FALSE: false,
// };

// const userReducer = (prevState = null, { type, payload }) => {
//   switch (type) {
//     case Type.SIGNUP_USER_SUCCESS:
//       return payload.response.user.userData;
//     case Type.SIGNUP_USER_ERROR:
//       return null;
//     default:
//       return prevState;
//   }
// };

// const authenticatedReducer = (prevState = false, { type, payload }) => {
//   switch (type) {
//     case Type.SIGNUP_USER_SUCCESS:
//       return payload.response.status === 'success'
//         ? returnValue.TRUE
//         : returnValue.FALSE;

//     case Type.SIGNUP_USER_ERROR:
//       return false;

//     default:
//       return prevState;
//   }
// };

// const errorReducer = (prevState = null, { type, payload }) => {
//   switch (type) {
//     case Type.SIGNUP_USER_ERROR:
//       return payload.error;

//     case Type.SIGNUP_USER_SUCCESS:
//       return null;

//     default:
//       return prevState;
//   }
// };

// const tokenReducer = (prevState = null, { type, payload }) => {
//   switch (type) {
//     case Type.SIGNUP_USER_SUCCESS:
//       return payload.response.user.token;

//     case Type.SIGNUP_USER_ERROR:
//       return null;

//     default:
//       return prevState;
//   }
// };

// const loadingReducer = (prevState = false, { type }) => {
//   switch (type) {
//     case Type.SIGNUP_USER_START:
//       return true;
//     case Type.SIGNUP_USER_SUCCESS:
//       return false;
//     case Type.SIGNUP_USER_ERROR:
//       return false;
//     default:
//       return prevState;
//   }
// };

// export default combineReducers({
//   user: userReducer,
//   authenticated: authenticatedReducer,
//   error: errorReducer,
//   token: tokenReducer,
//   isLoading: loadingReducer,
// });
