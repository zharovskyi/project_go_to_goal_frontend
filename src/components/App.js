import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardContainer from '../pages/DashboardPage/DashboardContainer';
import ContactsPage from '../pages/ContactsPage/ContactsPage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={DashboardContainer} />
        <Route path="/contacts" component={ContactsPage} />
      </Switch>
    </>
  );
}

export default App;
