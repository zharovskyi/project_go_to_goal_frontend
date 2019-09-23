// import { taskStatusToggle } from './ToggleActiveActions';
import { taskStatusToggle } from '../Dashboard/DashboardActions';
import * as api from '../../services/api';

export const toggleTaskOperation = id => dispatch => {
  api.toggleTask(id).then(() => {
    dispatch(taskStatusToggle(id));
  });
};

export const dummy = () => null;
