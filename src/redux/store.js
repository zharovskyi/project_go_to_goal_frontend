import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

// импортируем сюда свои редюсеры
import modalsReducers from './modalsReducers';

const rootReducer = combineReducers({
  session: (prevState = {}, action) => {
    return { a: 1 };
  },
  goal: (prevState = {}, action) => {
    return { title: '', description: '', _id: '', points: 0 };
  },
  tasks: (prevState = {}, action) => {
    return [
      {
        isDone: false,
        isBlocked: false,
        _id: 'sdagfgcvbcbcv',
        title: 'Делать уроки',
        description: 'string',
        points: 100,
        deadline: '8.00-10.00',
        createdAt: '2019-09-19T09:46:56.464Z',
        isActive: false,
      },
      {
        isDone: false,
        isBlocked: false,
        _id: 'xcvfverver',
        title: 'Делать уроки',
        description: 'string',
        points: 100,
        deadline: '8.00-10.00',
        createdAt: '2019-09-19T09:46:56.464Z',
        isActive: false,
      },
      {
        isDone: false,
        isBlocked: false,
        _id: 'zvdfdsfsd',
        title: 'Делать уроки',
        description: 'string',
        points: 100,
        deadline: '8.00-10.00',
        createdAt: '2019-09-19T09:46:56.464Z',
        isActive: false,
      },
      {
        isDone: false,
        isBlocked: false,
        _id: 'asf4wef3',
        title: 'Делать уроки',
        description: 'string',
        points: 100,
        deadline: '8.00-10.00',
        createdAt: '2019-09-19T09:46:56.464Z',
        isActive: false,
      },
      {
        isDone: false,
        isBlocked: false,
        _id: 'sdfgfgdfgsd',
        title: 'Делать уроки',
        description: 'string',
        points: 100,
        deadline: '8.00-10.00',
        createdAt: '2019-09-19T09:46:56.464Z',
        isActive: false,
      },
      {
        isDone: false,
        isBlocked: false,
        _id: 'dsfgdfsgdsfgsdfgsdfg',
        title: 'Делать уроки',
        description: 'string',
        points: 100,
        deadline: '8.00-10.00',
        createdAt: '2019-09-19T09:46:56.464Z',
        isActive: false,
      },
      {
        isDone: false,
        isBlocked: false,
        _id: '5d834e90a0a642211c3a6219',
        title: 'Делать уроки',
        description: 'string',
        points: 100,
        deadline: '8.00-10.00',
        createdAt: '2019-09-19T09:46:56.464Z',
        isActive: false,
      },
      {
        isDone: false,
        isBlocked: false,
        _id: 'dfgdfsgsdfgsdfg',
        title: 'Делать уроки',
        description: 'string',
        points: 100,
        deadline: '8.00-10.00',
        createdAt: '2019-09-19T09:46:56.464Z',
        isActive: false,
      },
      {
        isDone: false,
        isBlocked: false,
        _id: 'g34gergdfbsdggd',
        title: 'Делать уроки',
        description: 'string',
        points: 100,
        deadline: '8.00-10.00',
        createdAt: '2019-09-19T09:46:56.464Z',
        isActive: false,
      },
      {
        isDone: false,
        isBlocked: false,
        _id: 'vfdsvegthg',
        title: 'Вынести мусор',
        description: 'string',
        points: 30,
        deadline: '10.00-12.00',
        createdAt: '2019-09-19T11:22:42.697Z',
        isActive: true,
      },
      {
        isDone: false,
        isBlocked: false,
        _id: 'sf8g7dfsf7ds87f87sdf',
        title: 'Вынести мусор',
        description: 'string',
        points: 30,
        deadline: '10.00-12.00',
        createdAt: '2019-09-19T11:22:42.697Z',
        isActive: true,
      },
      {
        isDone: false,
        isBlocked: false,
        _id: 'sdfjksdfisdy87f6s7df',
        title: 'Вынести мусор',
        description: 'string',
        points: 30,
        deadline: '10.00-12.00',
        createdAt: '2019-09-19T11:22:42.697Z',
        isActive: true,
      },
      {
        isDone: false,
        isBlocked: false,
        _id: 'sdflksdfjksdfiuuiiuiu999',
        title: 'Вынести мусор',
        description: 'string',
        points: 30,
        deadline: '10.00-12.00',
        createdAt: '2019-09-19T11:22:42.697Z',
        isActive: true,
      },
    ];
  },
  modals: modalsReducers,
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, {}, composeWithDevTools(enhancer));

export default store;
