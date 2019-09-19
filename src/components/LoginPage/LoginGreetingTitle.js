import React from 'react';
import PropTypes from 'prop-types';

const LoginGreetingTitle = ({ sTitle }) => {
  return <h2 className={sTitle}>Вітаємо вас у нашій програмі!</h2>;
};

LoginGreetingTitle.propTypes = {
  sTitle: PropTypes.string.isRequired,
};

export default LoginGreetingTitle;
