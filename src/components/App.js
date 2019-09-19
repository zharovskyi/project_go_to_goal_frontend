import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardContainer from '../pages/DashboardPage/DashboardContainer';
import Modal from './ModalAddTask/ModalAddTask';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={DashboardContainer} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
