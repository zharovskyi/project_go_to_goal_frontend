import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import sessionReducer from './session/sessionReducers';

// импортируем сюда свои редюсеры
import modalsReducers from './modalsReducers';

const rootReducer = combineReducers({
  session: sessionReducer,
  goal: (prevState = {}, action) => {
    return { title: '', description: '', _id: '', points: 0 };
  },
  tasks: (prevState = {}, action) => {
    return [];
  },
  modals: modalsReducers,
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, {}, composeWithDevTools(enhancer));

export default store;
