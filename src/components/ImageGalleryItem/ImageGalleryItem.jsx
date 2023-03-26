import React from 'react';
import { useState } from 'react';
import css from 'components/styles.module.css';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({image}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };  
  
      const { webformatURL, tags, largeImageURL  } = image;  
  
      return (
        <div>
          <img
            className={css.ImageGalleryItem__image}
            src={webformatURL}
            alt={tags}
            onClick={openModal}
          />
          {isModalOpen && (
            <Modal onClose={closeModal}>
              <img src={largeImageURL} alt={tags} />
            </Modal>
           
          )}
        </div>
      );
}



 
  


// export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
}
