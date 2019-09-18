import windowSize from 'react-window-size';
import { connect } from 'react-redux';

// ACTIONS
import * as modalAddTaskActions from '../../redux/ModalAddTask/ModalAddTaskActions';
import * as modalCongratsActions from '../../redux/ModalCongrats/ModalCongratsActions';
import * as modalCreateGoalActions from '../../redux/ModalCreateGoal/ModalCreateGoalActions';
import * as modalDeleteTaskActions from '../../redux/ModalDeleteTask/ModalDeleteTaskActions';
import * as modalLogoutActions from '../../redux/ModalLogout/ModalLogoutActions';

//  COMPONENT TO WRAP
import DashboardPage from './DashboardPage';

const mapStateToProps = store => ({
  isModalAddTaskOpen: store.modals.isModalAddTaskOpen,
  isModalCongratsOpen: store.modals.isModalCongratsOpen,
  isModalCreateGoalOpen: store.modals.isModalCreateGoalOpen,
  isModalDeleteTaskOpen: store.modals.isModalDeleteTaskOpen,
  isModalLogoutOpen: store.modals.isModalLogoutOpen,
});

const mapDispatchToProps = dispatch => ({
  onCloseModalAddTask: isOpen =>
    dispatch(modalAddTaskActions.closeModal(isOpen)),
  onCloseModalCongrats: isOpen =>
    dispatch(modalCongratsActions.closeModal(isOpen)),
  onCloseModalCreateGoal: isOpen =>
    dispatch(modalCreateGoalActions.closeModal(isOpen)),
  onCloseModalDeleteTask: isOpen =>
    dispatch(modalDeleteTaskActions.closeModal(isOpen)),
  onCloseModalLogout: isOpen => dispatch(modalLogoutActions.closeModal(isOpen)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(windowSize(DashboardPage));
