import { addGoalSuccess, addGoalError } from './ModalCreateGoalActions';
import * as goalApi from '../../services/api';

export const addGoal = (goal, token) => dispatch => {
  console.log('token :', token);
  console.log('goal :', goal);
  goalApi
    .addNewGoal(goal, token)
    .then(response => {
      console.log(response);
      dispatch(addGoalSuccess(response.data.goal));
    })
    .catch(error => {
      dispatch(addGoalError(error));
    });
};

export const w = () => null;
