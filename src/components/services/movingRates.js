import React from 'react';
import styles from '../../styles/serviceRates.module.css';
import Fade from 'react-reveal/Fade';

function MovingRates() {
  return (
    <Fade>
      <div className={styles.container}>
        <div className={styles.title}>
          MOVING RATES
        </div>
        <div className={styles.ratesContainer}>
          <div className={styles.rate}>
            <div className={styles.price}>$145.00/hr</div>
            <div className={styles.rateBody}>Two movers and one truck.</div>
          </div>
          <div className={styles.rate}>
            <div className={styles.price}>$185.00/hr</div>
            <div className={styles.rateBody}>Three movers and one truck.</div>
          </div>
          <div className={styles.rate}>
            <div className={styles.price}>$240.00/hr</div>
            <div className={styles.rateBody}>Four movers and two trucks.</div>
          </div>
          <div className={styles.tools}>
            <div className={styles.toolsDesc}>
              All services come with access to our tools and equipment including...
            </div>
            <ul className={styles.toolsList}>
              <li className={styles.toolItem}>Basic tool set</li>
              <li className={styles.toolItem}>Dollies and cart</li>
              <li className={styles.toolItem}>Furniture Pads</li>
              <li className={styles.toolItem}>Straps</li>
              <li className={styles.toolItem}>Piano cart and sleigh.</li>
            </ul>
          </div>
        </div>
        <div className={styles.restrictions}>
          We do not move Grand Pianos, Hot Tubs or Slate Pool Tables.
        </div>
      </div>
    </Fade>
  )
}

export default MovingRates;