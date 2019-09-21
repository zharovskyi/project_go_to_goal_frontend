import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

// импортируем сюда свои редюсеры
import modalsReducers from './modalsReducers';
import * as dashboardReducers from './Dashboard/DashboardReducers';

const rootReducer = combineReducers({
  session: (prevState = {}, action) => {
    return {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkODM0YjMzYTBhNjQyMjExYzNhNjIwYiIsImlhdCI6MTU2ODg4NTU1Nn0.LJS6uq7jf95CtnB6o0zEg5gIo_D2ejlXQbiTinqXT-s',
      // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkODM0YjMzYTBhNjQyMjExYzNhNjIwYiIsImlhdCI6MTU2ODg4NTU1Nn0.LJS6uq7jf95CtnB6o0zEg5gIo_D2ejlXQbiTinqXT-s',
    };
  },
  goal: dashboardReducers.goalReducer,
  tasks: dashboardReducers.tasksReducer,
  modals: modalsReducers,
  isLoading: dashboardReducers.isLoadingReducer,
  dashboardErrors: dashboardReducers.errorsReducer,
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, {}, composeWithDevTools(enhancer));

export default store;
