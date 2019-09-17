import React from 'react';

//  COMPONENTS

//  STYLES
import styles from './Footer.module.css';

export default function Footer() {
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
