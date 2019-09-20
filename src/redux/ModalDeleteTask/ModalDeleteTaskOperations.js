import {
  removeCardsSuccess,
  removeCardsError,
  deleteTaskLocally,
} from '../Dashboard/DashboardActions';
import { closeModal } from './ModalDeleteTaskActions';
import * as api from '../../services/api';

export const deleteTaskOperation = id => dispatch => {
  api
    .deleteTask(id)
    .then(() => {
      dispatch(removeCardsSuccess(id));
      dispatch(closeModal());
      dispatch(deleteTaskLocally());
    })
    .catch(error => {
      dispatch(removeCardsError(error));
    });
};

export const dummy = () => null;
