import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({
  onOpenModal,
  onSubmit,
  onChange,
  email,
  password,
  sForm,
  sRegBtn,
}) => {
  return (
    <form onSubmit={onSubmit} className={sForm}>
      <input
        type="text"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Enter your login/email..."
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Enter your password..."
      />
      <button type="submit">Увiйти</button>
      <button onClick={onOpenModal} type="button" className={sRegBtn}>
        Реєстрація
      </button>
    </form>
  );
};

LoginForm.defaultProps = {
  sRegBtn: '',
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  sForm: PropTypes.string.isRequired,
  sRegBtn: PropTypes.string,
  onOpenModal: PropTypes.func.isRequired,
};

export default LoginForm;
