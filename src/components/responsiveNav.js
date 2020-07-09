import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { hideResNav, setNav } from '../actions';
import styles from '../styles/responsiveNav.module.css';

function ResponsiveNav() {

  const dispatch = useDispatch();
  const show = useSelector(state => state.resNav);
  const nav = useSelector(state => state.nav);

  function handleClick(section) {
    dispatch(hideResNav())
    dispatch(setNav(section))
    window.scrollTo(0, 0)
  }

  return (
    <Modal
        show={show}
        onHide={() => dispatch(hideResNav())}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          <button className={nav==="about" ? `${styles.link} ${styles.active}`: styles.link} onClick={()=>handleClick("about")}>
            ABOUT
          </button>
          <button className={nav==="services" ? `${styles.link} ${styles.active}`: styles.link} onClick={()=>handleClick("services")}>
            SERVICES
          </button>
          <button className={nav==="contact" ? `${styles.link} ${styles.active}`: styles.link} onClick={()=>handleClick("contact")}>
            CONTACT
          </button>
          <button className={styles.link} onClick={()=>{dispatch(hideResNav())}}>
            FREE QUOTE
          </button>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contact}>
            <i className="fas fa-envelope"></i> ablemovinginc@yahoo.com
          </div>
          <div className={styles.contact}>
            <i className="fas fa-phone"></i> 360-455-9557
          </div>
          <div className={styles.contact}>
            <i className="fas fa-map-marker-alt"></i> 6436 Mullen Rd SE, Olympia, WA 98503
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ResponsiveNav;