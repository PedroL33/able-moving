import React, {useState} from 'react';
import Fade from 'react-reveal/Fade';
import styles from '../../styles/storageRates.module.css';
import { SwitchTransition, CSSTransition } from "react-transition-group";

function StorageRates() {

  function handleChange(e) {
    const value = e.target.value;
    (value==="1" || value==="2") ? setHeight(100) : setHeight(200);
    (value==="1") ? setWidth(100) : (value==="2" || value==="3") ? setWidth(200) : setWidth((value-1)*100);
    (value==="1") ? setPrice(60) : (value==="2") ? setPrice(85) : setPrice((parseInt(value)+2) * 25);
    setSlider(e.target.value)
  }

  const [slider, setSlider] = useState(1);
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);
  const [price, setPrice] = useState(60);

  const sizeDesc = [
    "Enough space to store boxes and small items",
    "Space to fit many boxes",
    "Space to store small funiture items",
    "Space to store multiple furniture items.",
    "Space to store multiple furniture items and boxes.",
    "Space to store multiple furniture items and boxes.",
    "Space to store multiple furniture items and boxes."
  ]

  return (
    <Fade>
      <div className={styles.container}>
        <div className={styles.title}>STORAGE RATES</div>
        <div className={styles.ratesContainer}>
          <div className={styles.rate}>
            <div className={styles.storageDesc}>
              As a courtesy to our customers, we will pad any items that require protection for free.
            </div>
            <div className={styles.rateDisplay}>
              <div className={styles.rangeWrap}>
                <input type="range" max="7" min="1" value={slider} className={styles.rateSlider} onChange={(e)=>handleChange(e)}/>
                <output style={{left: `calc((((100% * (${slider - 1} / 6)) - ((12.5px / 3) * (${slider} - 4))))`}} className={styles.bubble}>{width*height/400} sq ft</output>
              </div>
              <SwitchTransition mode="out-in">
                <CSSTransition key={slider} classNames="fade" timeout={400}>
                  <div className={styles.rateDesc}>
                    <div className={styles.price}>
                      {price}$
                    </div>
                    <div className={styles.dimensions}>
                      {width/20}' x {height/20}'
                    </div>
                    <div clasasName={styles.desc}>
                      {sizeDesc[slider-1]}
                    </div>
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </div>
          </div>
        </div>
        <div className={styles.autoContainer}>
          <div className={styles.autoDesc}>
            *We also offer secure access auto, boat, and rv storage.  Rates are based on the size and what type of access you are requesting. 
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default StorageRates;