import React, { useState, useEffect } from 'react';
import styles from '../../styles/quoteForm.module.css';
import { CSSTransition } from 'react-transition-group';

function QuoteForm() {

  const key = process.env.REACT_APP_ZIPCODE_API_KEY;
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [distInfo, setDistInfo] = useState([])
  const [packing, setPacking] = useState(1);
  const [size, setSize] = useState(1);
  const [estimate, setEstimate] = useState(0);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    if(from.length === 5 && to.length === 5) {
      fetch(`https://www.zipcodeapi.com/rest/${key}/multi-info.json/${from}, ${to}/radians/`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        if(!data[to] || !data[from]) {
          setInvalid(true)
        }else {
          const fromLat = data[from].lat
          const toLat = data[to].lat;
          const dLng = data[to].lng - data[from].lng;
          const dLat = toLat - fromLat;
          const a = Math.pow(Math.sin(dLat/2), 2) + Math.cos(fromLat) * Math.cos(toLat) * Math.pow(Math.sin(dLng/2), 2)
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
          const distance = Math.round(3961 * c);
          setDistInfo([data[from].city, data[to].city, distance])
        }
      })
    }else {
      setDistInfo([]);
      setInvalid(false);
    }
  }, [from, to])

  function handleChange(field, value) {
    setShowQuote(false);
    field==='size' ? setSize(value) :
    field==='from' ? setFrom(value) :
    field==='to' ? setTo(value) :
    setPacking(value);
  }

  function getEstimate() {
    setShowQuote(true);
    setEstimate(distInfo[2] * 3 / 10 + ( ( (packing-1) * 145) + (size*145)));
  }

  return (
    <div className={styles.form}>
      <div className={styles.formItem}>
        <label className={styles.formLabel}>Moving From:</label>
        <input className={invalid ? `${styles.textInp} ${styles.invalid}`: styles.textInp} type="text" maxLength="5" placeholder="From Zipcode" onChange={(e)=> handleChange('from', e.target.value)}></input>
      </div>
      <div className={styles.formItem}>
        <label className={styles.formLabel}>Moving To:</label>
        <input className={invalid ? `${styles.textInp} ${styles.invalid}`: styles.textInp} type="text" maxLength="5" placeholder="To Zipcode" onChange={(e) => handleChange('to', e.target.value)}></input>
      </div>
      <div className={styles.formItem}>
        <label className={styles.formLabel}>Date of Move:</label>
        <input className={styles.dateInp} type="date"></input>
      </div>
      <div className={styles.formItem}>
        <label className={styles.formLabel}>Size of Move:</label>
        <select className={styles.sizeInp} name="size" onChange={(e)=>handleChange('size', e.target.value)}>
          <option value={1}>Studio</option>
          <option value={2}>1 Bedroom</option>
          <option value={3}>2 Bedroom</option>
          <option value={4}>3 Bedroom</option>
        </select>
      </div>
      <div className={styles.formItem}>
        <label className={styles.formLabel}>Packing Services:</label>
        <div className={styles.packingInp}>
          <div className={packing===1 ? `${styles.packingItem} ${styles.active}`: styles.packingItem} onClick={() => handleChange('packing', 1)}>None</div>
          <div className={packing===2 ? `${styles.packingItem} ${styles.active}`: styles.packingItem} onClick={() => handleChange('packing', 2)}>Partial</div>
          <div className={packing===3 ? `${styles.packingItem} ${styles.active}`: styles.packingItem} onClick={() => handleChange('packing', 3)}>Full</div>
        </div>
      </div>
      <div className={styles.formItem}>
        <div className={styles.submitContainer}>
          <button onClick={()=> getEstimate()} disabled={distInfo.length===3 && !showQuote ? false: true} className={styles.submitButton}>Get Estimate</button>
        </div>
      </div>
      <div className={styles.distance}>
        <CSSTransition in={distInfo.length===3} timeout={300} classNames="distDisplay" unmountOnExit mountOnEnter>
          <div style={{overflow: 'hidden'}}>{distInfo[0]} to {distInfo[1]} is about {distInfo[2]} miles.</div>
        </CSSTransition>
      </div>
      <div className={styles.estimate}>
        <CSSTransition in={showQuote} timeout={300} classNames="distDisplay" unmountOnExit mountOnEnter>
          <div className={styles.estimateDisplay} style={{overflow: 'hidden'}}>Your move will be about {estimate}$ to {estimate + 100}$.</div>
        </CSSTransition>
      </div>
    </div>
  )
}

export default QuoteForm;