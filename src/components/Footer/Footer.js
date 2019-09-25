import React, { Component } from 'react';
// import windowSize from 'react-window-size';
// import PropTypes from 'prop-types';
// import { compose } from 'redux';
import { Link } from 'react-router-dom';

//  COMPONENTS
// import ProgressBar from '../ProgressBar/ProgressBar';

//  STYLES
import styles from './Footer.module.css';

class Footer extends Component {
  state = {};

  render() {
    return (
      <div className={styles.footer}>
        <p className={styles.footerText}>
          &#169; Copyright 2019{' '}
          <Link className={styles.footerCopyright} to="/contacts">
            powered by BOOTC@MP#13 team
          </Link>
        </p>
        {/* {windowWidth < 768 && <ProgressBar />} */}
      </div>
    );
  }
}

// Footer.propTypes = {
//   windowWidth: PropTypes.number.isRequired,
// };

// export default compose(windowSize)(Footer);
export default Footer;
