import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import windowSize from 'react-window-size';
import PropTypes from 'prop-types';
import { login } from '../../redux/sessionLogin/sessionLoginOperations';
import getIsAuthenticated from '../../redux/sessionLogin/sessionLoginSelectors';

// HTML & CSS
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
import ModalRegistration from '../../components/ModalRegistration/ModalRegistration';
import Backdrop from '../../components/Backdrop/Backdrop';
import { getIsOpenModalRegister } from '../../redux/ModalRegistration/ModalRegistrationSelectors';
import {
  openModal,
  closeModal,
} from '../../redux/ModalRegistration/ModalRegistrationActions';

class LoginPage extends Component {
  static propTypes = {
    windowWidth: PropTypes.number.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    onOpenModal: PropTypes.func.isRequired,
    onCloseModal: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // const { login, password } = this.state;

    this.props.onLogin({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      login: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;
    const { windowWidth, isModalOpen, onOpenModal, onCloseModal } = this.props;
    return (
      <div className={s.login_page}>
        {isModalOpen && (
          <Backdrop onClose={onCloseModal}>
            <ModalRegistration onClose={onCloseModal} />
          </Backdrop>
        )}
        {/* MOBILE || LOGO */}
        {windowWidth < 768 && (
          <img src={logo} alt="logo" width="104" className={s.logo} />
        )}

        {/* TABLET & DESKTOP || FORM */}
        {windowWidth > 767 && (
          <header className={s.header}>
            <div className={s.header_form}>
              <img src={logo} alt="logo" width="104" className={s.logo} />
              <LoginForm
                onOpenModal={onOpenModal}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                email={email}
                password={password}
                sForm={s.form}
              />
            </div>
          </header>
        )}
        <main className={s.main}>
          {/* TABLET & DESKTOP || COVER */}
          {windowWidth > 767 && (
            <LoginCover
              sCover={s.cover}
              coverImg={coverImg}
              sBgCover={s.bg_cover}
            />
          )}
          <div className={s.greeting}>
            {/* ALL || TITLE */}
            <LoginGreetingTitle sTitle={s.title} />

            {/* MOBILE ||FORM */}
            {windowWidth < 768 && (
              <LoginForm
                onOpenModal={onOpenModal}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                login={email}
                password={password}
                sForm={s.form}
                sRegBtn={s.reg_btn}
              />
            )}

            {/* TABLET & DESKTOP ||GREETING */}
            {windowWidth > 767 && (
              <LoginGreeting sGreetingText={s.greeting_text} />
            )}
            {windowWidth > 767 && <Party className={s.decor} />}

            {/* ALL || BTN REG */}
            <LoadingGreetingBtn
              onOpenModal={onOpenModal}
              sGreetingBtn={s.greeting_btn}
            />
          </div>
        </main>

        {/* TABLET & DESKTOP || FOOTER */}
        {windowWidth > 767 && (
          <LoginFooter sFooter={s.footer} sFooterText={s.footer_text} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: getIsAuthenticated(state),
  isModalOpen: getIsOpenModalRegister(state),
});

const mapDispatchToProps = {
  onLogin: login,
  onOpenModal: openModal,
  onCloseModal: closeModal,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  windowSize,
)(LoginPage);
