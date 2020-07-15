import React from 'react';
import styles from '../../styles/serviceIntro.module.css';

function ServiceIntro() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={`${window.location.origin}/images/services/servicesIntro.png`} />
      <div className={styles.text}>
        Moving can be difficult and stressful, we are here to take a lot of weight off your plate. 
      </div>
    </div>
  )
}

export default ServiceIntro;