import React, {useEffect, useState} from 'react';
import ResponsiveNav from './responsiveNav';
import { useDispatch, useSelector } from 'react-redux';
import { showResNav, hideResNav, setNav, showQuote } from '../actions';
import QuoteModal from './quoteModal/quoteModal';
import styles from '../styles/navbar.module.css';

function Navbar() {

  const dispatch = useDispatch();
  const nav = useSelector(state => state.nav);
  const quote = useSelector(state => state.showQuote);
  const [navLight, setNavLight] = useState(true);
  const sticky = useSelector(state => state.sticky);

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return function() {
      window.removeEventListener('resize', handleResize())
      window.removeEventListener('scroll', handleScroll())
    }
  })

  function handleResize() {
    if(window.innerWidth > 800) {
      dispatch(hideResNav());
    }
  }

  function handleScroll() {
    if(window.pageYOffset > window.innerHeight-50 || window.pageYOffset > 1000) {
      setNavLight(false)
    }else if(window.pageYOffset < window.innerHeight-50) {
      setNavLight(true)
    }
  }

  function handleClick(section) {
    window.scrollTo(0, 0)
    dispatch(setNav(section))
  }

  return (
    <div className={sticky ? `${styles.navbarContainer} ${styles.sticky} ${styles.light}` : navLight ? `${styles.navbarContainer} ${styles.light}` : `${styles.navbarContainer}`}>
      <div className={navLight ? `${styles.navbar} ${styles.light}`: `${styles.navbar}`}>
        <div className={styles.logo}>
          <div className={styles.logoTop}>Able</div>
          <div className={styles.logoBottom}>Moving Inc.</div>
        </div>
        <div className={navLight ? `${styles.links} ${styles.light}` : `${styles.links}`}>
          <div className={styles.linkContainer}>
            <div className={nav==="about" && !quote ? `${styles.link} ${styles.active}` : `${styles.link}`} onClick={()=>handleClick("about")}>
              ABOUT
            </div>
          </div>
          <div className={styles.linkContainer}>
            <div className={nav==="services" && !quote ? `${styles.link} ${styles.active}` : `${styles.link}`} onClick={()=>handleClick("services")}>
              SERVICES
            </div>
          </div>
          <div className={styles.linkContainer}>
            <div className={nav==="contact" && !quote ? `${styles.link} ${styles.active}` : `${styles.link}`} onClick={()=>handleClick("contact")}>
              CONTACT
            </div>
          </div>
          <div className={styles.linkContainer}>
            <div className={quote ? `${styles.link} ${styles.active}` : `${styles.link}`} onClick={()=>dispatch(showQuote())}>
              FREE QUOTE
            </div>
            <QuoteModal />
          </div>
        </div>
        <div className={styles.resLinksContainer}>
          <button className={navLight ? `${styles.burger} ${styles.light}` : `${styles.burger}`} onClick={()=> dispatch(showResNav())}>
            <i className="fas fa-bars"></i>
          </button>
          <ResponsiveNav />
        </div>
      </div>
    </div>
  )
}

export default Navbar;