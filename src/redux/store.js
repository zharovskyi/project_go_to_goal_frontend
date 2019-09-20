import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import {
  tasksReducer,
  errorsModalDeleteReducer,
  idForDeleteTaskReducer,
} from './Dashboard/DashboardReducers';

import modalsReducers from './modalsReducers';
import * as dashboardReducers from './Dashboard/DashboardReducers';

const rootReducer = combineReducers({
  session: (prevState = {}, action) => {
    return { a: 1 };
  },
  goal: dashboardReducers.goalReducer,
  tasks: dashboardReducers.tasksReducer,
  modals: modalsReducers,
  idForDeleteTask: idForDeleteTaskReducer,
  errorsModalDelete: errorsModalDeleteReducer,
  isLoading: dashboardReducers.isLoadingReducer,
  dashboardError: dashboardReducers.errorsReducer,
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, {}, composeWithDevTools(enhancer));

export default store;
