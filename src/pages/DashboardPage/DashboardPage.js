import React, { Component } from 'react';
import windowSize from 'react-window-size';
import { connect } from 'react-redux';

// COMPONENTS
import Header from '../../components/Header/Header';
import TaskList from '../../components/TaskList/TaskList';
import NewGoal from '../../components/NewGoal/NewGoal';
import Footer from '../../components/Footer/Footer';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Backdrop from '../../components/Backdrop/Backdrop';
import ModalCreateGoal from '../../components/ModalCreateGoal/ModalCreateGoal';
import ModalAddTask from '../../components/ModalAddTask/ModalAddTask';
import ModalLogout from '../../components/ModalLogout/ModalLogout';
import ModalDeleteTask from '../../components/ModalDeleteTask/ModalDeleteTask';
import ModalCongrats from '../../components/ModalCongrats/ModalCongrats';

// ACTIONS
import * as modalAddTaskActions from '../../redux/ModalAddTask/ModalAddTaskActions';
import * as modalCongratsActions from '../../redux/ModalCongrats/ModalCongratsActions';
import * as modalCreateGoalActions from '../../redux/ModalCreateGoal/ModalCreateGoalActions';
import * as modalDeleteTaskActions from '../../redux/ModalDeleteTask/ModalDeleteTaskActions';
import * as modalLogoutActions from '../../redux/ModalLogout/ModalLogoutActions';
import * as modalRegistrationActions from '../../redux/ModalRegistration/ModalRegistrationActions';

//  STYLES
import styles from './DashboardPage.module.css';

class DashboardPage extends Component {
  state = {};

  render() {
    return (
      <div className={styles.dashboardBody}>
        <Header />
        {this.props.windowWidth > 320 && this.props.windowWidth <= 768 && (
          <ProgressBar />
        )}
        <NewGoal />
        <TaskList />
        <Footer />
        {this.props.isModalAddTaskOpen && (
          <Backdrop>
            <ModalAddTask onClose={this.props.onCloseModalAddTask} />
          </Backdrop>
        )}
        {this.props.isModalAddTaskOpen && (
          <Backdrop>
            <ModalCongrats onClose={this.props.onCloseModalCongrats} />
          </Backdrop>
        )}
        <ModalCreateGoal />
        <ModalLogout />
        <ModalDeleteTask />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isModalAddTaskOpen: store.modals.isModalAddTaskOpen,
  isModalCongratsOpen: store.modals.isModalCongratsOpen,
  isModalCreateGoalOpen: store.modals.isModalCreateGoalOpen,
  isModalDeleteTaskOpen: store.modals.isModalDeleteTaskOpen,
  isModalLogoutOpen: store.modals.isModalLogoutOpen,
  isModalRegistrationOpen: store.modals.isModalRegistrationOpen,
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
  onCloseModalRegistration: isOpen =>
    dispatch(modalRegistrationActions.closeModal(isOpen)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(windowSize(DashboardPage));
