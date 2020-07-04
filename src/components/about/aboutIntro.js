import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from '../../styles/aboutIntro.module.css';

function AboutIntro() {

  return (
    <Fade>
      <div className={styles.container}>
        <img className={styles.image} src={`${window.location.origin}/images/about/welcome.png`}/>
        <div className={styles.title}>DEDICATED TO MAKING YOUR MOVE HASSLE-FREE.</div>
        <div className={styles.text}>
          For over 16 years, Able Moving, Inc. has been providing friendly, reliable, 
          and quality service to the Western Washington community.  
        </div>
      </div>
    </Fade>
  )
}

export default AboutIntro;
