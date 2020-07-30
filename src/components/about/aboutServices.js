import React from 'react';
import styles from '../../styles/aboutServices.module.css';
import Fade from 'react-reveal/Fade';
import { useDispatch } from 'react-redux';
import { setNav, showQuote } from '../../actions';

function AboutServices() {

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setNav('services'))
    window.scrollTo(0, 0)
  }

  return (
    <Fade>
      <div className={styles.container}>
        <div className={styles.title}>
          OUR SERVICES
        </div>
        <div className={styles.summary}>
          Whether its a single piece of furniture or your entire home, we are here to help at affordable prices.
          <div className={styles.priceContainer}>
            <button className={styles.priceButton} onClick={() => handleClick()}>Pricing</button>
          </div>
        </div>
        <div className={styles.serviceContainer}>
          <div className={styles.serviceItem}>
            <img className={styles.image} src={`${window.location.origin}/images/about/residential.png`} />
            <div className={styles.serviceTitle}>Residential Moving</div>
            <div className={styles.serviceBody}>
              <div className={styles.serviceDesc}>Single item or the whole home services. Packing, loading and unloading, or a simple load or unload only.</div>
              <button className={styles.quote} onClick={() => dispatch(showQuote())}>Get a quote</button>
            </div>
          </div>
          <div className={styles.serviceItem}>
            <img className={styles.image} src={`${window.location.origin}/images/about/comercial.png`} />
            <div className={styles.serviceTitle}>Comercial Moving</div>
            <div className={styles.serviceBody}>
              <div className={styles.serviceDesc}>We can design a strategy to relocate your business and get your office up and running again in no time.</div>
              <button className={styles.quote} onClick={() => dispatch(showQuote())}>Get a quote</button>
            </div>
          </div>
          <div className={styles.serviceItem}>
            <img className={styles.image} src={`${window.location.origin}/images/about/storage.png`} />
            <div className={styles.serviceTitle}>Storage</div>
            <div className={styles.serviceBody}>
              <div className={styles.serviceDesc}>We offer secure access storage as well as auto boat and RV storage options.</div>
              <button className={styles.quote} onClick={() => dispatch(setNav("services"))}>See Pricing</button>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default AboutServices;