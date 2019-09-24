/* eslint-disable import/prefer-default-export */
import { postSuccessModal, postErrorModal } from './ModalAddTaskActions';
import * as postsAPI from '../../services/api';

export const postSuccess = (task, token) => dispatch => {
  postsAPI
    .addTask(task, token)
    .then(response => {
      console.log('response :', response);
      console.log(response.data.task);
      dispatch(postSuccessModal(response.data.task));
    })
    .catch(error => {
      dispatch(postErrorModal(error));
    });
};
