// MODULES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// COMPONENTS
import Header from '../../components/Header/Header';
import TaskList from '../../components/TaskList/TaskList';
// import NewGoal from '../../components/NewGoal/NewGoal';
import Footer from '../../components/Footer/Footer';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Backdrop from '../../components/Backdrop/Backdrop';
import ModalCreateGoal from '../../components/ModalCreateGoal/ModalCreateGoal';
import ModalAddTask from '../../components/ModalAddTask/ModalAddTask';
import ModalLogout from '../../components/ModalLogout/ModalLogout';
import ModalDeleteTask from '../../components/ModalDeleteTask/ModalDeleteTask';
import ModalCongrats from '../../components/ModalCongrats/ModalCongrats';

// ACTIONS ... SELECTORS ... OPERATIONS

//  STYLES
import styles from './DashboardPage.module.css';

class DashboardPage extends Component {
  state = {};

  componentDidMount() {
    const { onGetGoal, onGetTasks, token } = this.props;

    onGetGoal(token);
    onGetTasks(token);
  }

  componentDidUpdate() {
    const {
      hasDashboardError,
      onDashboardErrors,
      dashboardErrors,
    } = this.props;

    if (hasDashboardError) {
      onDashboardErrors(dashboardErrors);
    }
  }

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
        {windowWidth >= 768 && windowWidth < 1280 && <ProgressBar />}
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
        {isModalDeleteTaskOpen && (
          <Backdrop onClose={onCloseModalDeleteTask}>
            <ModalDeleteTask onClose={onCloseModalDeleteTask} />
          </Backdrop>
        )}
        {isModalLogoutOpen && (
          <Backdrop onClose={onCloseModalLogout}>
            <ModalLogout onClose={onCloseModalLogout} />
          </Backdrop>
        )}
        <ToastContainer />
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
  goal: PropTypes.shape({
    isDone: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
  tasks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  token: PropTypes.string.isRequired,
  hasDashboardError: PropTypes.bool.isRequired,
  dashboardErrors: PropTypes.arrayOf(PropTypes.object),
  // ---------------------
  onCloseModalAddTask: PropTypes.func.isRequired,
  onCloseModalCongrats: PropTypes.func.isRequired,
  onCloseModalCreateGoal: PropTypes.func.isRequired,
  onCloseModalDeleteTask: PropTypes.func.isRequired,
  onCloseModalLogout: PropTypes.func.isRequired,
  onGetGoal: PropTypes.func.isRequired,
  onGetTasks: PropTypes.func.isRequired,
  onDashboardErrors: PropTypes.func.isRequired,
};

DashboardPage.defaultProps = {
  goal: null,
  dashboardErrors: [],
};

export default DashboardPage;
