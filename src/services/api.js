import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://go-to-goal.goit.co.ua/api/';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkODM0YTNlYTBhNjQyMjExYzNhNjIwNiIsImlhdCI6MTU2ODg4NTMxMH0.2LjFiNUFQf4HzYqCLLQWG8LPoT3B83eqAiFKhe8yi-k';

export const setToken = Token => ({
  headers: {
    Authorization: `${Token}`,
  },
});

export const addTask = task => axios.post('tasks', task, setToken(token));

export const w = () => {};
