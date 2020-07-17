import React from 'react';
import styles from '../../styles/aboutHeader.module.css';
import SideLinks from '../sideLinks';

function ContactHeader() {
  return (
    <div className={styles.container} style={{backgroundImage: `url(${window.location.origin}/images/contact/family.JPG)`}}>
      <div className={styles.overlay}>
        <SideLinks />
        <div className={styles.title}>
          CONTACT US
        </div>
        <div className={styles.text}>
          We want to hear from you.
        </div>
      </div>
    </div>
  )
}

export default ContactHeader;