import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

// импортируем сюда свои редюсеры
import modalsReducers from './modalsReducers';

const rootReducer = combineReducers({
  session: (prevState = {}, action) => {
    return { token: '' };
  },
  goal: (prevState = {}, action) => {
    return { title: '', description: '', _id: '', points: 0 };
  },
  tasks: (prevState = {}, action) => {
    return [];
  },
  modals: modalsReducers,
  isLoading: (prevState = {}, action) => {
    return false;
  },
  dashboardError: (prevState = {}, action) => {
    return {};
  },
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, {}, composeWithDevTools(enhancer));

export default store;
