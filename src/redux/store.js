import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

// импортируем сюда свои редюсеры
import modalsReducers from './modalsReducers';

const rootReducer = combineReducers({
  session: (prevState = {}, action) => {
    return {
      a: 1,
      user: {
        name: 'Вася Пупкін',
        age: 8,
      },
    };
  },
  goal: (prevState = {}, action) => {
    return { title: 'bike', description: '', _id: '', points: 100 };
  },
  tasks: (prevState = {}, action) => {
    return [
      // {
      //   title: 'string',
      //   description: 'string',
      //   _id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      //   points: 15,
      //   isDone: true,
      // },
      {
        title: 'string',
        description: 'string',
        _id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        points: 15,
        isDone: true,
      },
      {
        title: 'string',
        description: 'string',
        _id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        points: 15,
        isDone: true,
      },
      {
        title: 'string',
        description: 'string',
        _id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        points: 15,
        isDone: true,
      },
      {
        title: 'string',
        description: 'string',
        _id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        points: 15,
        isDone: true,
      },
      {
        title: 'string',
        description: 'string',
        _id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        points: 25,
        isDone: true,
      },
    ];
  },
  modals: modalsReducers,
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, {}, composeWithDevTools(enhancer));

export default store;
