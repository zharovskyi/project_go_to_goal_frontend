import {
  removeCardsSuccess,
  removeCardsError,
} from '../Dashboard/DashboardActions';
import * as api from '../../services/api';

export const deleteTaskOperation = id => dispatch => {
  api
    .deleteTask(id)
    .then(() => {
      dispatch(removeCardsSuccess(id));
    })
    .catch(error => {
      dispatch(removeCardsError(error));
    });
};

export const dummy = () => null;
