import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// импортируем сюда свои редюсеры
import sessionLoginReducers from './sessionLogin/sessionLoginReducers';
import modalsReducers from './modalsReducers';

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionLoginReducers),
  goal: (prevState = {}, action) => {
    return { title: '', description: '', _id: '', points: 0 };
  },
  tasks: (prevState = {}, action) => {
    return [];
  },
  modals: modalsReducers,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const rootReducer = combineReducers({
//   session: sessionLoginReducers,
//   goal: (prevState = {}, action) => {
//     return { title: '', description: '', _id: '', points: 0 };
//   },
//   tasks: (prevState = {}, action) => {
//     return [];
//   },
//   modals: modalsReducers,
// });

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

// export const store = createStore(
//   rootReducer,
//   {},
//   composeWithDevTools(enhancer),
// );

// export const a = () => {};

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(enhancer),
);
export const persistor = persistStore(store);
