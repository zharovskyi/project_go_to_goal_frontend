// MODULES
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

//  STYLES
import styles from './DashboardPage.module.css';

class DashboardPage extends Component {
  state = {};

  render() {
    const {
      windowWidth,
      isModalAddTaskOpen,
      isModalCongratsOpen,
      isModalCreateGoalOpen,
      isModalDeleteTaskOpen,
      isModalLogoutOpen,
      onCloseModalAddTask,
      onCloseModalCongrats,
      onCloseModalCreateGoal,
      onCloseModalDeleteTask,
      onCloseModalLogout,
    } = this.props;

    return (
      <div className={styles.dashboardBody}>
        <Header />
        {windowWidth > 320 && windowWidth <= 768 && <ProgressBar />}
        <NewGoal />
        <TaskList />
        <Footer />
        {isModalAddTaskOpen && (
          <Backdrop onClose={onCloseModalAddTask}>
            <ModalAddTask onClose={onCloseModalAddTask} />
          </Backdrop>
        )}
        {isModalCongratsOpen && (
          <Backdrop onClose={onCloseModalCongrats}>
            <ModalCongrats onClose={onCloseModalCongrats} />
          </Backdrop>
        )}
        {isModalCreateGoalOpen && (
          <Backdrop onClose={onCloseModalCreateGoal}>
            <ModalCreateGoal onClose={onCloseModalCreateGoal} />
          </Backdrop>
        )}
        {true && (
          <Backdrop onClose={onCloseModalDeleteTask}>
            <ModalDeleteTask onClose={onCloseModalDeleteTask} />
          </Backdrop>
        )}
        {isModalLogoutOpen && (
          <Backdrop onClose={onCloseModalLogout}>
            <ModalLogout onClose={onCloseModalLogout} />
          </Backdrop>
        )}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  isModalAddTaskOpen: PropTypes.bool.isRequired,
  isModalCongratsOpen: PropTypes.bool.isRequired,
  isModalCreateGoalOpen: PropTypes.bool.isRequired,
  isModalDeleteTaskOpen: PropTypes.bool.isRequired,
  isModalLogoutOpen: PropTypes.bool.isRequired,
  onCloseModalAddTask: PropTypes.func.isRequired,
  onCloseModalCongrats: PropTypes.func.isRequired,
  onCloseModalCreateGoal: PropTypes.func.isRequired,
  onCloseModalDeleteTask: PropTypes.func.isRequired,
  onCloseModalLogout: PropTypes.func.isRequired,
};

export default DashboardPage;
