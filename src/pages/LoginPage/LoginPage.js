import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import s from './LoginPage.module.css';

class LoginPage extends Component {
  state = {
    login: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // const { login, password } = this.state;

    // this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      login: '',
      password: '',
    });
  };

  render() {
    const { login, password } = this.state;
    return (
      <body>
        <header>
          <img src="../../assets/images/login-page-logo@1X.png" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="login"
              value={login}
              onChange={this.handleChange}
              placeholder="Enter your login"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Enter your password"
            />
            <button type="submit">Login</button>
            <button type="button">Registration</button>
          </form>
        </header>
        <main>
          <div className={s.cover}>
            <img
              src="../../assets/images/login-page-cover@1X.png"
              alt="cover"
            />
          </div>
          <div>greeting</div>
        </main>
        <footer>@ Copyright 2019</footer>
      </body>
    );
  }
}

export default LoginPage;
