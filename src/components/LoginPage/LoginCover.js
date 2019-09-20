import React from 'react';
import PropTypes from 'prop-types';

const LoginCover = ({ sCover, coverImg, sBgCover }) => {
  return (
    <div className={sCover}>
      <img src={coverImg} alt="cover" className={sBgCover} />
    </div>
  );
};

LoginCover.propTypes = {
  sCover: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  sBgCover: PropTypes.string.isRequired,
};

export default LoginCover;
