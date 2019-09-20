import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://go-to-goal.goit.co.ua/api/';

export const setToken = () => ({
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkODM0YTQ1YTBhNjQyMjExYzNhNjIwNyIsImlhdCI6MTU2ODg4NTMxOH0.b5mk--fUnqmcy-ROxc6WI8E756ILnYjarg-Olf9Ad9s',
  },
});

// Authorization: `${token}`,

export const deleteTask = id => axios.delete(`tasks/${id}`, setToken());

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
