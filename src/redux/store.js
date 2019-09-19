import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import {
  tasksReducer,
  errorsModalDeleteReducer,
  idForDeleteTaskReducer,
} from './Dashboard/DashboardReducers';

import modalsReducers from './modalsReducers';

const rootReducer = combineReducers({
  session: (prevState = {}, action) => {
    return { a: 1 };
  },
  goal: (prevState = {}, action) => {
    return { title: '', description: '', _id: '', points: 0 };
  },
  tasks: tasksReducer,
  modals: modalsReducers,
  idForDeleteTask: idForDeleteTaskReducer,
  errorsModalDelete: errorsModalDeleteReducer,
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, {}, composeWithDevTools(enhancer));

export default store;
