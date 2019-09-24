import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardContainer from '../pages/DashboardPage/DashboardContainer';
import ModalCongrats from './ModalCongrats/ModalCongrats';

function App() {
  return (
    <>
      <ModalCongrats />
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={DashboardContainer} />
      </Switch>
    </>
  );
}

export default App;
