import React, { Component } from 'react';
import windowSize from 'react-window-size';
import s from './LoginPage.module.css';
import logo from '../../assets/images/login-page-logo@1X.png';
import coverImg from '../../assets/images/login-page-cover@1X.png';
import { ReactComponent as Party } from '../../assets/svg/party.svg';
import LoginForm from '../../components/LoginPage/LoginForm';
import LoginCover from '../../components/LoginPage/LoginCover';
import LoginGreeting from '../../components/LoginPage/LoginGreeting';
import LoginGreetingTitle from '../../components/LoginPage/LoginGreetingTitle';
import LoadingGreetingBtn from '../../components/LoginPage/LoadingGreetingBtn';
import LoginFooter from '../../components/LoginPage/LoginFooter';

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
    const { windowWidth } = this.props;
    return (
      <body className={s.login_page}>
        {/* MOBILE */}
        {windowWidth < 768 && (
          <img src={logo} alt="logo" width="104" className={s.logo} />
        )}

        {/* TABLET & DESKTOP */}
        {windowWidth > 767 && (
          <header className={s.header}>
            <div className={s.header_form}>
              <img src={logo} alt="logo" width="104" className={s.logo} />
              <LoginForm
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                login={login}
                password={password}
                sForm={s.form}
              />
            </div>
          </header>
        )}
        <main className={s.main}>
          {/* TABLET & DESKTOP */}
          {windowWidth > 767 && (
            <LoginCover
              sCover={s.cover}
              coverImg={coverImg}
              sBgCover={s.bg_cover}
            />
          )}

          {/* ALL */}
          <LoginGreetingTitle sTitle={s.title} />

          {/* MOBILE */}
          {windowWidth < 768 && (
            <LoginForm
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              login={login}
              password={password}
              sForm={s.form}
              sRegBtn={s.reg_btn}
            />
          )}

          {/* TABLET & DESKTOP */}
          {windowWidth > 767 && (
            <LoginGreeting
              sGreeting={s.greeting}
              sGreetingText={s.greeting_text}
            />
          )}
          {windowWidth > 767 && <Party className={s.decor} />}

          {/* ALL */}
          <LoadingGreetingBtn sGreetingBtn={s.greeting_btn} />
        </main>

        {/* TABLET & DESKTOP */}
        {windowWidth > 767 && (
          <LoginFooter sFooter={s.footer} sFooterText={s.footer_text} />
        )}
      </body>
    );
  }
}

export default windowSize(LoginPage);
