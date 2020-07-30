import React from 'react';
import styles from '../../styles/header.module.css';
import SideLinks from '../sideLinks';
import Fade from 'react-reveal/Fade';
import { useDispatch } from 'react-redux';
import { showQuote } from '../../actions';

function AboutHeader() {

  const dispatch = useDispatch();

  return (
    <Fade>
      <div className={styles.container} style={{backgroundImage: `url(${window.location.origin}/images/services/serviceHeader.jpg)`}}>
        <div className={styles.overlay}>
          <div className={styles.title}>Services</div>
          <div className={styles.text}>What can we do for you?</div>
          <button className={styles.button} onClick={()=>dispatch(showQuote())}>GET AN ESTIMATE</button>
        </div>
        <SideLinks />
      </div>
    </Fade>
  )
}

export default AboutHeader;