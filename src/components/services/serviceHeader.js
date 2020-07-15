import React from 'react';
import headerStyles from '../../styles/aboutHeader.module.css';
import styles from '../../styles/serviceHeader.module.css';
import SideLinks from '../sideLinks';
import Fade from 'react-reveal/Fade';

function AboutHeader() {
  return (
    <Fade>
      <div className={headerStyles.container} style={{backgroundImage: `url(${window.location.origin}/images/services/serviceHeader.jpg)`}}>
        <div className={headerStyles.overlay}>
          <div className={headerStyles.title}>Services</div>
          <div className={styles.text}>What can we do for you?</div>
          <div className={styles.getQuoteButton}>GET AN ESTIMATE</div>
        </div>
        <SideLinks />
      </div>
    </Fade>
  )
}

export default AboutHeader;