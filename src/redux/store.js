import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

// импортируем сюда свои редюсеры
import * as modalAddTaskReducers from './ModalAddTask/ModalAddTaskReducers';
import * as modalCongratsReducers from './ModalCongrats/ModalCongratsReducers';
import * as modalCreateGoalReducers from './ModalCreateGoal/ModalCreateGoalReducers';
import * as modalDeleteTaskReducers from './ModalDeleteTask/ModalDeleteTaskReducers';
import * as modalLogoutReducers from './ModalLogout/ModalLogoutReducers';
import * as modalRegistrationReducers from './ModalRegistration/ModalRegistrationReducers';

const rootReducer = combineReducers({
  session: (prevState = {}, action) => {
    return { a: 1 };
  },
  goal: (prevState = {}, action) => {
    return { title: '', description: '', _id: '', points: 0 };
  },
  tasks: (prevState = {}, action) => {
    return [];
  },
  modals: (prevState = {}, action) => {
    return {
      isModalAddTaskOpen: modalAddTaskReducers.openCloseReducer,
      isModalCongratsOpen: false,
      isModalCreateGoalOpen: false,
      isModalDeleteTaskOpen: false,
      isModalLogoutOpen: false,
      isModalRegistrationOpen: false,
    };
  },
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, {}, composeWithDevTools(enhancer));

export default store;
