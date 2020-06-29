import React from 'react'

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">
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
        </div>
      </div>
    </div>
  )
}

export default Navbar;