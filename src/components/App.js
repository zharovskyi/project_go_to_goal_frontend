import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import TaskList from './TaskList/TaskList';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={TaskList} />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </>
  );
}

export default App;
