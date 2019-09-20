import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://go-to-goal.goit.co.ua/api/';

// export const setToken = token => ({
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

// export const setAuthToken = token => {
//   // eslint-disable-next-line dot-notation
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

// export const clearAuthToken = () => {
//   // eslint-disable-next-line dot-notation
//   axios.defaults.headers.common['Authorization'] = null;
// };

export const setToken = options => {
  return axios.post('auth/current', options);
};

export const setLogin = credentials => {
  return axios.post('auth/login', credentials);
};

export const signUpUser = credentials => {
  return axios.post('auth/register', credentials);
};

export const getTasks = (tasksAlias, token) =>
  axios.get(tasksAlias, {
    headers: {
      Authorization: token,
    },
  });

export const getGoal = (goalAlias, token) =>
  axios.get(goalAlias, {
    headers: {
      Authorization: token,
    },
  });
