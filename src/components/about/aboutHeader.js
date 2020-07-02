import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from '../../styles/aboutHeader.module.css';

function AboutHeader() {

  return (
    <Fade>
      <div className={styles.container} style={{backgroundImage: `url(${window.location.origin}/images/aboutHeader.JPG)`}}>
        <div className={styles.overlay}>
          <div className={styles.title}>FRIENDLY AND PROFESSIONAL MOVING SERVICES</div>
          <div className={styles.text}>Family Owned and Operated.</div>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader;