import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// импортируем сюда свои редюсеры
import sessionLoginReducers from './sessionLogin/sessionLoginReducers';
import modalsReducers from './modalsReducers';
import * as dashboardReducers from './Dashboard/DashboardReducers';

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionLoginReducers),
  goal: dashboardReducers.goalReducer,
  tasks: dashboardReducers.tasksReducer,
  modals: modalsReducers,
  isLoading: dashboardReducers.isLoadingReducer,
  dashboardErrors: dashboardReducers.errorsReducer,
});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(enhancer),
);
export const persistor = persistStore(store);
