import React, {useEffect, useState} from 'react';
import ResponsiveNav from './responsiveNav';
import { useDispatch, useSelector } from 'react-redux';
import { showResNav, hideResNav, setNav } from '../actions';

function Navbar() {

  const dispatch = useDispatch();
  const nav = useSelector(state => state.nav);
  const [navLight, setNavLight] = useState(true)

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
    if(window.pageYOffset > window.innerHeight-50) {
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
    <div className={navLight ? "navbar-container light" : "navbar-container"}>
      <div className="site-navbar">
        <div className="site-logo">
          <div className="navbar-logo-top">Able</div>
          <div className="navbar-logo-bottom">Moving Inc.</div>
        </div>
        <div className={navLight ? "links-container light" : "links-container"}>
          <div className="navbar-link-container">
            <div className={nav==="about" ? "navbar-link active" : "navbar-link"} onClick={()=>handleClick("about")}>
              ABOUT
            </div>
          </div>
          <div className="navbar-link-container">
            <div className={nav==="services" ? "navbar-link active" : "navbar-link"} onClick={()=>handleClick("services")}>
              SERVICES
            </div>
          </div>
          <div className="navbar-link-container">
            <div className={nav==="contact" ? "navbar-link active" : "navbar-link"} onClick={()=>handleClick("contact")}>
              CONTACT
            </div>
          </div>
          <div className="navbar-link-container">
            <div className="navbar-link">
              FREE QUOTE
            </div>
          </div>
        </div>
        <div className="responsive-links-container">
          <button className={navLight ? "burger-menu light" : "burger-menu"} onClick={()=> dispatch(showResNav())}>
            <i className="fas fa-bars"></i>
          </button>
          <ResponsiveNav />
        </div>
      </div>
    </div>
  )
}

export default Navbar;