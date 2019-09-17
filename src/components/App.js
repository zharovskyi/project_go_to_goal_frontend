import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import NewGoal from '../pages/NewGoal/NewGoal';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/newgoal" component={NewGoal} />
      </Switch>
    </>
  );
}

export default App;
