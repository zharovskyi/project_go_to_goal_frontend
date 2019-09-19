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
        _id: '5d836502ed677f2115301ff9',
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
        _id: '5d836502ed677f2115301ff9',
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
        _id: '5d836502ed677f2115301ff9',
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
        _id: '5d836502ed677f2115301ff9',
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
