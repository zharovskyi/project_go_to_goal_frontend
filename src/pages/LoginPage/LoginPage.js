import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import windowSize from 'react-window-size';
import PropTypes from 'prop-types';
import { login } from '../../redux/sessionLogin/sessionLoginOperations';
import withAuthRedirect from '../../hoc/withAuthRedirect';

// HTML & CSS
import s from './LoginPage.module.css';
import logo from '../../assets/images/login-page-logo@1X.png';
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
import { getErrorMessage } from '../../redux/sessionLogin/sessionLoginSelectors';
import {
  openModal,
  closeModal,
} from '../../redux/ModalRegistration/ModalRegistrationActions';

class LoginPage extends Component {
  static propTypes = {
    windowWidth: PropTypes.number.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
    onOpenModal: PropTypes.func.isRequired,
    onCloseModal: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

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
    const {
      windowWidth,
      isModalOpen,
      onOpenModal,
      onCloseModal,
      errorMessage,
    } = this.props;
    return (
      <div className={s.login_page}>
        {errorMessage && <p>{errorMessage}</p>}
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
              />
            </div>
          </header>
        )}
        <main className={s.main}>
          {/* TABLET & DESKTOP || COVER */}
          {windowWidth > 767 && <LoginCover />}
          <div className={s.greeting}>
            {/* ALL || TITLE */}
            <LoginGreetingTitle />

            {/* MOBILE ||FORM */}
            {windowWidth < 768 && (
              <LoginForm
                onOpenModal={onOpenModal}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                login={email}
                password={password}
              />
            )}

            {/* TABLET & DESKTOP ||GREETING */}
            {windowWidth > 767 && <LoginGreeting />}
            {windowWidth > 767 && <Party className={s.decor} />}

            {/* ALL || BTN REG */}
            <LoadingGreetingBtn onOpenModal={onOpenModal} />
          </div>
        </main>

        {/* TABLET & DESKTOP || FOOTER */}
        {windowWidth > 767 && <LoginFooter />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isModalOpen: getIsOpenModalRegister(state),
  errorMessage: getErrorMessage(state),
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
  withAuthRedirect,
  windowSize,
)(LoginPage);
