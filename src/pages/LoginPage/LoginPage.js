import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import s from './LoginPage.module.css';
import logo from '../../assets/images/login-page-logo@1X.png';
import coverImg from '../../assets/images/login-page-cover@1X.png';

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
        <header className={s.header}>
          <img src={logo} alt="logo" width="104" />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="login"
              value={login}
              onChange={this.handleChange}
              placeholder="Enter your login/email..."
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Enter your password..."
            />
            <button type="submit">Логін</button>
            <button type="button">Реєстрація</button>
          </form>
        </header>
        <main>
          <div className={s.cover}>
            <img
              src={coverImg}
              alt="cover"
              width="826"
              className={s.bgi_cover}
            />
            {/* <div className={s.bgi_cover} /> */}
          </div>
          <div className={s.greeting}>
            <h2 className={s.title}>Вітаємо вас у нашій програмі!</h2>
            <p className={s.greeting_text}>
              Тут ви зможете чітко сформулювати ваші бажання - чого ви хочете
              досягти чи отримати у якості винагороди. Вам потрібно поставити
              собі мету, а згодом - виконувати поставлені задачі у комфортному
              для себе ритмі та не забувати відмічати їх виконання.
            </p>
            <p className={s.greeting_text}>
              Будьте наполегливими, відповідальними і ви зможете досягти всього,
              чого забажаєете! Подобається ідея? Готові допомагати, розвиватися
              та йти до своєї мети?
            </p>
            <p className={s.greeting_text}>
              Так, так, все саме так, як у дорослому житті :) Тоді не зважайте,
              а швидко зареєструйтеся, або заходьте на свій аккаунт.
            </p>
            <button type="button" className={s.greeting_btn}>
              Зареєструватися
            </button>
          </div>
          <div className={s.decor} />
        </main>
        <footer className={s.footer}>
          <p className={s.footer_text}>@ Copyright 2019</p>
        </footer>
      </body>
    );
  }
}

export default LoginPage;
