import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { hideResNav, setNav } from '../actions';

function ResponsiveNav() {

  const dispatch = useDispatch();
  const show = useSelector(state => state.resNav);
  const nav = useSelector(state => state.nav);

  function handleClick(section) {
    dispatch(hideResNav())
    dispatch(setNav(section))
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
      <div className="sidebar-links-container">
        <button className={nav==="about" ? "sidebar-link active": "sidebar-link"} onClick={()=>handleClick("about")}>
          ABOUT
        </button>
        <button className={nav==="services" ? "sidebar-link active": "sidebar-link"} onClick={()=>handleClick("services")}>
          SERVICES
        </button>
        <button className={nav==="contact" ? "sidebar-link active": "sidebar-link"} onClick={()=>handleClick("contact")}>
          CONTACT
        </button>
        <button className="sidebar-link" onClick={()=>{dispatch(hideResNav())}}>
          FREE QUOTE
        </button>
      </div>
    </Modal>
  )
}

export default ResponsiveNav;