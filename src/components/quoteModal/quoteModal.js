import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { hideQuote } from '../../actions';
import QuoteForm from './quoteForm';

function QuoteModal() {

  const dispatch = useDispatch();
  const show = useSelector(state => state.showQuote);

  return(
    <Modal
      dialogClassName="quote"
      onHide={() => dispatch(hideQuote())}
      show={show}
      centered
      size={"lg"}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Generate a quote.
        </Modal.Title>
      </Modal.Header>
      <QuoteForm /> 
    </Modal>
  )
}

export default QuoteModal;