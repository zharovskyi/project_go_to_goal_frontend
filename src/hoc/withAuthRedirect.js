import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getIsAuthenticated } from '../redux/sessionLogin/sessionLoginSelectors';

const withAuthRedirect = BaseComponent => {
  class WithAuthRedirect extends Component {
    static propTypes = {
      authenticated: PropTypes.bool.isRequired,
      history: PropTypes.shape({
        replace: PropTypes.func.isRequired,
      }).isRequired,
      // location: PropTypes.func.isRequired,
    };

    componentDidMount() {
      const { authenticated, history } = this.props;
      if (authenticated) {
        history.replace('/dashboard');
      }
    }

    componentDidUpdate() {
      const { authenticated, history } = this.props;
      if (authenticated) {
        history.replace('/dashboard');
      }
    }

    // componentDidMount() {
    //   const { authenticated, history } = this.props;
    //   if (!authenticated) return;

    //   history.replace('/');
    // }

    // componentDidUpdate() {
    //   const { authenticated, history, location } = this.props;
    //   if (!authenticated) return;

    //   console.log('WithAuthRedirect: ', this.props);

    //   if (location.state && location.state.from)
    //     // eslint-disable-next-line consistent-return
    //     return history.replace(location.state.from);

    //   history.replace('/');
    // }

    render() {
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <BaseComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    authenticated: getIsAuthenticated(state),
  });

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default withAuthRedirect;
