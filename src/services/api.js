import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://go-to-goal.goit.co.ua/api/';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkODM0YjMzYTBhNjQyMjExYzNhNjIwYiIsImlhdCI6MTU2OTE1OTkyOH0.PiBNEXKF8MPQ4ehVxyGVJDIB7yy3zuVjiSB8sR4sYcI';

export const setTokenLoginPage = options => axios.get('user', options);

export const setToken = Token => ({
  headers: {
    Authorization: `${Token}`,
  },
});

export const addNewGoal = goal => axios.post('goals', goal, setToken(token));
export const addTask = task => axios.post('tasks', task, setToken(token));

export const signUpUser = credentials => {
  return axios.post('auth/register', credentials);
};

export const setLogin = credentials => {
  return axios.post('auth/login', credentials);
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
