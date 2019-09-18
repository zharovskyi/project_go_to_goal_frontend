import React from 'react';
import ModalCongrats from '../../components/ModalCongrats/ModalCongrats';
// import ModalRegistration from '../../components/ModalRegistration/ModalRegistration';
import Header from '../../components/Header/Header';

const DashboardPage = () => {
  return (
    <div>
      <Header />

      {/* <h2>DashboardPage</h2> */}
      <ModalCongrats />
      {/* <ModalRegistration /> */}
    </div>
  );
};

export default DashboardPage;
