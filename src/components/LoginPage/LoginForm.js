import React from 'react';
import PropTypes from 'prop-types';
import s from '../../pages/LoginPage/LoginPage.module.css';

const LoginForm = ({ onOpenModal, onSubmit, onChange, email, password }) => {
  return (
    <form onSubmit={onSubmit} className={s.form}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        required
        placeholder="Enter your login/email..."
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        required
        minLength="6"
        maxLength="12"
        placeholder="Enter your password..."
      />
      <button type="submit">Увiйти</button>
      <button onClick={onOpenModal} type="button" className={s.reg_btn}>
        Реєстрація
      </button>
    </form>
  );
};

LoginForm.defaultProps = {
  email: '',
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default LoginForm;
