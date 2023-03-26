import React from 'react';
import { useEffect } from 'react';
import css from 'components/styles.module.css';
import PropTypes from 'prop-types';


export const Modal = ( {onClose, children }) => {
useEffect(() => {
  const handleKeyDown = ({code}) => {
    if(code === 'Escape') {
        // Закриття по кнопці Esc 
        onClose();
    }
  };
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
  }, [onClose]);

 const handleBackdropClick = ({target, currentTarget}) => {
    if(target === currentTarget) {
        // Закриття по кліку на бекдроп
        onClose();
    }
  };

    return (
      <div className={css.Overlay} onClick={handleBackdropClick}>
        <div className={css.Modal}>
          { children }
        </div>
      </div>
    );
    };


Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

// export default Modal;
