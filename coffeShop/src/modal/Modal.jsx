import React from 'react';
import styles from './modal.module.css';

const Modal = ({ show, handleClose, children }) => {
  return (
    <div className={styles.modal} style={{ display: show ? 'block' : 'none' }}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
