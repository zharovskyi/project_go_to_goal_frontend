import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://go-to-goal.goit.co.ua/api/';

export const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// export const addPostLogOut = post => axios.post('auth/logout', post);

export const w = () => {};
