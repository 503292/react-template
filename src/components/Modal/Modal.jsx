import React from 'react';
import ReactDOM from 'react-dom';
import css from './Modal.module.css';
import OrderCallForm from '../Header/OrderCallForm/OrderCallForm';
import { ReactComponent as Close } from '../../assets/image/close.svg';

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className={css.modalOverlay} />
          <div
            className={css.modalWrapper}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className={css.modal}>
              <div className={css.modalHeader}>
                <button
                  type="button"
                  className={css.modalCloseButton}
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  {/* <span aria-hidden="true">&times;</span> */}
                  <Close className={css.close} aria-hidden="true" />
                </button>
              </div>
              <OrderCallForm />
            </div>
          </div>
        </>,
        document.body,
      )
    : null;

export default Modal;
