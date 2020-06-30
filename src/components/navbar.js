import React, {useEffect} from 'react';
import ResponsiveNav from './responsiveNav';
import { useDispatch } from 'react-redux';
import { showResNav, hideResNav } from '../actions';

function Navbar() {

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return function() {
      window.removeEventListener('resize', handleResize())
    }
  })

  function handleResize() {
    if(window.innerWidth > 800) {
      dispatch(hideResNav());
    }
  }

  return (
    <div className="navbar-container">
      <div className="site-navbar">
        <div className="site-logo">
          <div className="navbar-logo-top">Able</div>
          <div className="navbar-logo-bottom">Moving Inc.</div>
        </div>
        <div className="links-container">
          <div className="navbar-link-container">
            <div className="navbar-link">
              ABOUT
            </div>
          </div>
          <div className="navbar-link-container">
            <div className="navbar-link">
              SERVICES
            </div>
          </div>
          <div className="navbar-link-container">
            <div className="navbar-link">
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
          <button className="burger-menu" onClick={()=> dispatch(showResNav())}>
            <i className="fas fa-bars"></i>
          </button>
          <ResponsiveNav />
        </div>
      </div>
    </div>
  )
}

export default Navbar;