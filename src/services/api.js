import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://go-to-goal.goit.co.ua/api/';

const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkODRjOTMwOWM2ZWUyNTI4NGNlNWRiOCIsImlhdCI6MTU2ODk4MzM0NH0.48AvmSOnH5uLHOBVYg6_ZKzZrADQv4IwAQ24yMlEtAA`;

export const setToken = Token => ({
  headers: {
    Authorization: `${Token}`,
  },
});

export const addNewGoal = goal => axios.post('goals', goal, setToken(token));
