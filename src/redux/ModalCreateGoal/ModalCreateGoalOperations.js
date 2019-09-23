import * as goalApi from '../../services/api';

export const addGoal = goal => dispatch => {
  goalApi
    .addNewGoal(goal)
    .then(response => {})
    .catch(error => {});
};

export const w = () => null;
