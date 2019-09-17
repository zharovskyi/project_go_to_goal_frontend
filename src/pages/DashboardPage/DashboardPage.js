import React from 'react';
// import ModalRegistration from '../../components/ModalRegistration/ModalRegistration';
import backdropComponent from '../../components/Backdrop/backdropComponent';

const DashboardPage = () => {
  return (
    <div>
      <h2>DashboardPage</h2>
      {/* <ModalRegistration /> */}
    </div>
  );
};

export default backdropComponent({ closeOnEsc: true, closeOnclick: true })(
  DashboardPage,
);
