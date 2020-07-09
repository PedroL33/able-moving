import React from 'react';
import styles from '../styles/sideLinks.module.css';

function SideLinks() {
  return (
    <div className={styles.container}>
      <div className={styles.link}>
        <i className="fas fa-envelope"></i>
        <span className={styles.linkText}>ablemovinginc@yahoo.com</span>
      </div>
      <div className={styles.link}>
        <i className="fas fa-phone"></i>
        <span className={styles.linkText}>360-455-9557</span>
      </div>
      <div className={styles.link}>
        <i className="fas fa-map-marker-alt"></i>
        <span className={styles.linkText}>6436 Mullen Rd SE, Olympia, WA 98503</span>
      </div>
    </div>
  )
}

export default SideLinks;