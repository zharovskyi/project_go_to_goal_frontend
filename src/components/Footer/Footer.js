import React, { Component } from 'react';

//  STYLES
import styles from './Footer.module.css';

class Footer extends Component {
  state = {};

  render() {
    return (
      <div className={styles.footer}>
        <p className={styles.footerText}>
          &#169; Copyright 2019
          <span className={styles.footerCopyright}>
            {' '}
            powered by BOOTC@MP#13 team
          </span>
        </p>
      </div>
    );
  }
}

export default Footer;
