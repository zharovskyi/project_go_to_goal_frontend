// MODULES
import React, { Component } from 'react';

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

export default class DashboardPage extends Component {
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
          <Backdrop onClose={this.props.onCloseModalAddTask}>
            <ModalAddTask onClose={this.props.onCloseModalAddTask} />
          </Backdrop>
        )}
        {this.props.isModalCongratsOpen && (
          <Backdrop onClose={this.props.onCloseModalCongrats}>
            <ModalCongrats onClose={this.props.onCloseModalCongrats} />
          </Backdrop>
        )}
        {this.props.isModalCreateGoalOpen && (
          <Backdrop onClose={this.props.onCloseModalCreateGoal}>
            <ModalCreateGoal onClose={this.props.onCloseModalCreateGoal} />
          </Backdrop>
        )}
        {this.props.isModalDeleteTaskOpen && (
          <Backdrop onClose={this.props.onCloseModalDeleteTask}>
            <ModalDeleteTask onClose={this.props.onCloseModalDeleteTask} />
          </Backdrop>
        )}
        {this.props.isModalLogautOpen && (
          <Backdrop onClose={this.props.onCloseModalLogaut}>
            <ModalLogout onClose={this.props.onCloseModalLogaut} />
          </Backdrop>
        )}
      </div>
    );
  }
}
