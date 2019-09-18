import React from 'react';
import windowSize from 'react-window-size';

//  COMPONENTS
import ProgressBar from '../../components/ProgressBar/ProgressBar';

//  STYLES
import styles from './Footer.module.css';

const Footer = () => {
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
};

export default windowSize(Footer);
