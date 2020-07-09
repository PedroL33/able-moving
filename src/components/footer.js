import React from 'react';
import styles from '../styles/footer.module.css';
import {setNav} from '../actions';
import { useDispatch } from 'react-redux';
import moment from 'moment-timezone';


function Footer() {

  const dispatch = useDispatch();

  function isOpen() {
    const hour = moment().tz("America/Los_Angeles").hour()
    const day = moment().tz("America/Los_Angeles").day()
    if(day != 7 && ((day === 6 && hour < 17 && hour > 10) || (hour < 18 && hour > 9))) {
      return "WE ARE OPEN NOW!";
    }
    return day===6 ? "We are closed. We will be open again on Monday at 9AM" :
    day===5 ? "We are closed. We will be open again tomorrow at 10AM" :
    "We are closed. We will be open again tomorrow at 9AM";
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={`${window.location.origin}/images/footerAward.jpg`} />
      <div className={styles.body}> 
        <div className={styles.schedule}>
          {isOpen()}
        </div>
        <button className={styles.button} onClick={() => dispatch(setNav("contact"))}>
          Send us a message.
        </button>
        <div className={styles.contact}>
          <div>
            <i class="fas fa-envelope"></i> ablemovinginc@yahoo.com
          </div>
          <div>
            <i class="fas fa-phone"></i> 360-455-9557
          </div>
          <div>
            <i class="fas fa-map-marker-alt"></i> 6436 Mullen Rd SE, Olympia, WA 98503
          </div>
        </div>
      </div>
      <div className={styles.contributions}>
        Icons made by 
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a> 
        from 
        <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com  </a>
        |   Designed and developed by Peter Lee
      </div>
    </div>
  )
}

export default Footer;