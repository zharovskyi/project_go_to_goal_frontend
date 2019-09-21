// import { combineReducers } from 'redux';
import { Type } from './DashboardActions';

export const tasksReducer = (prevState = [], action) => {
  switch (action.type) {
    case Type.TASKLIST_GET_SUCCESS:
      return action.payload.tasks;

    default:
      return prevState;
  }
};

export const goalReducer = (prevState = [], action) => {
  switch (action.type) {
    case Type.GOAL_GET_SUCCESS:
      return action.payload.goal;

    default:
      return prevState;
  }
};

export const isLoadingReducer = (prevState = [], action) => {
  switch (action.type) {
    case Type.GOAL_GET_START:
    case Type.TASKLIST_GET_START:
      return true;

    case Type.TASKLIST_GET_SUCCESS:
    case Type.TASKLIST_GET_ERROR:
    case Type.GOAL_GET_SUCCESS:
    case Type.GOAL_GET_ERROR:
      return false;

    default:
      return prevState;
  }
};

export const errorsReducer = (prevState = [], action) => {
  switch (action.type) {
    case Type.GOAL_GET_ERROR:
    case Type.TASKLIST_GET_ERROR:
      return [...prevState, action.payload.error];

    case Type.GOAL_GET_START:
    case Type.TASKLIST_GET_START:
    case Type.TASKLIST_GET_SUCCESS:
    case Type.GOAL_GET_SUCCESS:
      return [];

    default:
      return prevState;
  }
};
