import React from 'react';

// COMPONENTS
import Header from '../../components/Header/Header';
import TaskList from '../../components/TaskList/TaskList';
import Footer from '../../components/Footer/Footer';
import ModalCreateGoal from '../../components/ModalCreateGoal/ModalCreateGoal';
import ModalAddTask from '../../components/ModalAddTask/ModalAddTask';
import ModalLogout from '../../components/ModalLogout/ModalLogout';
import ModalDeleteTask from '../../components/ModalDeleteTask/ModalDeleteTask';
import ModalCongrats from '../../components/ModalCongrats/ModalCongrats';

const DashboardPage = () => {
  return (
    <div>
      {/* <Header />
      <TaskList /> */}
      <Footer />
      {/* <ModalCreateGoal />
      <ModalAddTask />
      <ModalLogout />
      <ModalDeleteTask />
      <ModalCongrats /> */}
    </div>
  );
};

export default DashboardPage;
