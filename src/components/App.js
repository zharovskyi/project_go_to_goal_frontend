import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import CreateTaskButton from './CreateTaskButton/CreateTaskButton';

function App() {
  return (
    <>
      <CreateTaskButton />
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </>
  );
}

export default App;
