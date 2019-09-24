import React from 'react';
import design from './Loader.module.css';

const Loader = () => {
  return (
    <div className={design.cover}>
      <div className={design.lds_ring}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
