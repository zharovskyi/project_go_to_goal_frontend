import * as api from '../../redux/ModalLogout/ModalLogoutActions';
import axios from 'axios';
import { logOutSucsses, logOutError } from './ModalLogoutActions';

export const logOut = () => dispatch => {
    axios
        .post('auth/logout')
        .then(response => {
            dispatch(logOutSucsses(response.data));
        })
        .catch(error => {
            dispatch(logOutError(error));
        });
};