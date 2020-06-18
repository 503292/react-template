import React from 'react';
import ReactDOM from 'react-dom';
import css from './Modal.module.css';

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
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p>Hello, Im a modal.</p>
            </div>
          </div>
        </>,
        document.body,
      )
    : null;

export default Modal;
