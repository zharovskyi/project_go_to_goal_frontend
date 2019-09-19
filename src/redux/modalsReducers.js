import { combineReducers } from 'redux';

import * as modalAddTaskReducers from './ModalAddTask/ModalAddTaskReducers';
import * as modalCongratsReducers from './ModalCongrats/ModalCongratsReducers';
import * as modalCreateGoalReducers from './ModalCreateGoal/ModalCreateGoalReducers';
import * as modalDeleteTaskReducers from './ModalDeleteTask/ModalDeleteTaskReducers';
import * as modalLogoutReducers from './ModalLogout/ModalLogoutReducers';
import * as modalRegistrationReducers from './ModalRegistration/ModalRegistrationReducers';

export default combineReducers({
  isModalAddTaskOpen: modalAddTaskReducers.openCloseReducer,
  isModalCongratsOpen: modalCongratsReducers.openCloseReducer,
  isModalCreateGoalOpen: modalCreateGoalReducers.openCloseReducer,
  isModalDeleteTaskOpen: modalDeleteTaskReducers.openCloseReducer,
  isModalLogoutOpen: modalLogoutReducers.openCloseReducer,
  isModalRegistrationOpen: modalRegistrationReducers.openCloseReducer,
});
