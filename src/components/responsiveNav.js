import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { hideResNav } from '../actions';

function ResponsiveNav() {

  const dispatch = useDispatch();
  const show = useSelector(state => state.resNav)

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
        <button className="sidebar-link" onClick={()=>{dispatch(hideResNav())}}>
          ABOUT
        </button>
        <button className="sidebar-link" onClick={()=>{dispatch(hideResNav())}}>
          SERVICES
        </button>
        <button className="sidebar-link" onClick={()=>{dispatch(hideResNav())}}>
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