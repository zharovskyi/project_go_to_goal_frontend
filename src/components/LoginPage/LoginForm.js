import React from 'react';

const LoginForm = ({ onSubmit, onChange, login, password, sForm, sRegBtn }) => {
  return (
    <form onSubmit={onSubmit} className={sForm}>
      <input
        type="text"
        name="login"
        value={login}
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
      <button type="button" className={sRegBtn}>
        Реєстрація
      </button>
    </form>
  );
};

export default LoginForm;
