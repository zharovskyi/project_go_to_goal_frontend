/* eslint-disable import/prefer-default-export */
import { postSuccessModal, postErrorModal } from './ModalAddTaskActions';
import * as postsAPI from '../../services/api';

export const postSuccess = task => dispatch => {
  postsAPI
    .addTask(task)
    .then(response => {
      console.log('response :', response);
      dispatch(postSuccessModal(response.task));
    })
    .catch(error => {
      dispatch(postErrorModal(error));
    });
};
