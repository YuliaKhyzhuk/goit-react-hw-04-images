import React, { Component } from 'react';
import css from 'components/styles.module.css';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  static propTypes = {
    image: PropTypes.object.isRequired,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, tags, largeImageURL  } = this.props.image;


    return (
      <div>
        <img
          className={css.ImageGalleryItem__image}
          src={webformatURL}
          alt={tags}
          onClick={this.openModal}
        />
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageURL} tags={tags} />
          </Modal>
         
        )}
      </div>
    );
  }
}

export default ImageGalleryItem;
