import React from 'react';
import headerStyles from '../../styles/aboutHeader.module.css';
import styles from '../../styles/serviceHeader.module.css';

function AboutHeader() {
  return (
    <div className={headerStyles.container} style={{backgroundImage: `url(${window.location.origin}/images/services/serviceHeader.jpg)`}}>
      <div className={headerStyles.overlay}>
        <div className={headerStyles.title}>Services</div>
        <button className={styles.getQuoteButton}>GET AN ESTIMATE</button>
      </div>
    </div>
  )
}

export default AboutHeader;