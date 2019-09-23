import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardContainer from '../pages/DashboardPage/DashboardContainer';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import { refresh } from '../redux/sessionLogin/sessionLoginOperations';

class App extends Component {
  static propTypes = {
    refresh: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { refresh } = this.props;
    refresh();
    console.log('App componentDidMount');
  }

  render() {
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
}

const mapDispatchToProps = {
  refresh,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
