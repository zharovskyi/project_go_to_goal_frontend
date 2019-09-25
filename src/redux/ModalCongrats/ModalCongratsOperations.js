import * as api from '../../services/api';
import * as congratsActions from './ModalCongratsActions';

export const patchGoalOperation = (goalId, tasks, token) => dispatch => {
  const tasksToDelete = tasks.filter(
    task => task.inActive && !tasks.isComplete,
  );

  tasksToDelete.map(task => api.deleteTask(task.id, token));

  const tasksToToggleDone = tasks.filter(
    task => task.inActive && tasks.isComplete,
  );

  tasksToToggleDone.map(task =>
    api.toggleTask(task.id, `{"isDone": true, "inActive": false}`, token),
  );

  api
    .patchGoal(goalId, token)
    .then(() => {
      dispatch(congratsActions.modalSuccess());
      dispatch(congratsActions.closeModal());
    })
    .catch(err => {
      dispatch(congratsActions.modalError(err));
      dispatch(congratsActions.closeModal());
    });
};

export const w = () => {};
