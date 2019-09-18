import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import ModalCreateGoal from './ModalCreateGoal/ModalCreateGoal';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
      <ModalCreateGoal />
    </>
  );
}

export default App;
