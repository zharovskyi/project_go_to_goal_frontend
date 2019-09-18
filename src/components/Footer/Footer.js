import React, { Component } from 'react';
import windowSize from 'react-window-size';
import PropTypes from 'prop-types';
import { compose } from 'redux';

//  COMPONENTS
import ProgressBar from '../ProgressBar/ProgressBar';

//  STYLES
import styles from './Footer.module.css';

class Footer extends Component {
  state = {};

  render() {
    const { windowWidth } = this.props;

    return (
      <div className={styles.footer}>
        <p className={styles.footerText}>
          &#169; Copyright 2019
          <span className={styles.footerCopyright}>
            {' '}
            powered by BOOTC@MP#13 team
          </span>
        </p>
        {windowWidth <= 320 && <ProgressBar />}
      </div>
    );
  }
}

Footer.propTypes = {
  windowWidth: PropTypes.number.isRequired,
};

export default compose(windowSize)(Footer);
