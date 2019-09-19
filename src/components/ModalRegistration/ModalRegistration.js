import React, { Component } from 'react';
import s from './ModalRegistration.module.css';
import logo from '../../assets/images/zaglushka.PNG';
// import passwordValidation from './signUpValidations';

class ModalRegistration extends Component {
  state = {
    username: '',
    age: '',
    email: '',
    password: '',
    correctPassword: '',
    errorPassword: '',
  };

  HandleSubmitForm = e => {
    e.preventDefault();
    if (this.state.password === this.state.correctPassword) {
      // тут запускать операцию
    } else {
      this.setState({
        errorPassword: 'Пароли не совпадают!!!',
      });
    }
  };

  HandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      username,
      age,
      email,
      password,
      correctPassword,
      errorPassword,
    } = this.state;
    return (
      <div className={s.formContainer}>
        <form className={s.form} onSubmit={this.HandleSubmitForm}>
          <div className={s.wrapper}>
            <div className={s.textContainer}>
              <h1 className={s.text}>Реєстрація</h1>
              <h2 className={s.text}>Дитина</h2>
            </div>

            <div className={s.inputContant}>
              <div className={s.nameSurname}>
                <input
                  className={s.userName}
                  type="text"
                  placeholder="Ім'я"
                  value={username}
                  name="username"
                  onChange={this.HandleChange}
                  required="Вкажіть Ім'я"
                  maxLength="20"
                />
                <input
                  className={s.userAge}
                  type="number"
                  placeholder="Вік"
                  value={age}
                  name="age"
                  min="3"
                  max="99"
                  onChange={this.HandleChange}
                  required
                />
              </div>
              <input
                className={s.inputText}
                type="email"
                placeholder="E-mail"
                value={email}
                name="email"
                onChange={this.HandleChange}
              />
              <input
                className={s.inputText}
                type="password"
                placeholder="Пароль"
                value={password}
                name="password"
                onChange={this.HandleChange}
                minLength="6"
                maxLength="12"
              />
              <input
                className={s.inputText}
                type="password"
                placeholder="Підтвердити пароль"
                value={correctPassword}
                name="correctPassword"
                onChange={this.HandleChange}
                minLength="6"
                maxLength="12"
              />
            </div>
            <div className={s.buttonDiv}>
              <button className={s.button} type="button">
                Назад
              </button>
              <button className={s.button} type="submit">
                OK
              </button>
            </div>
          </div>
          <p className={s.passwordError}>{errorPassword || ''}</p>

          {/* ------------------img------------------------------- */}
          <div className={s.image}>
            <img src={logo} alt="ds" />
          </div>
          {/* --------------------img----------------------- */}
        </form>
      </div>
    );
  }
}

export default ModalRegistration;
