import React, { Component } from 'react';
import css from 'components/styles.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown = ({code}) => {
    if(code === 'Escape') {
        // Закриття по кнопці Esc 
        this.props.onClose();
    }
  };

  handleBackdropClick = ({target, currentTarget}) => {
    if(target === currentTarget) {
        // Закриття по кліку на бекдроп
        this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return (
      <div className={css.Overlay} onClick={this.handleBackdropClick}>
        <div className={css.Modal}>
          { children }
        </div>
      </div>
    )
  }
}

export default Modal;
