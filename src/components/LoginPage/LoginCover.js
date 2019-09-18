import React from 'react';

const LoginCover = ({ sCover, coverImg, sBgCover }) => {
  return (
    <div className={sCover}>
      <img src={coverImg} alt="cover" width="826" className={sBgCover} />
    </div>
  );
};

export default LoginCover;
