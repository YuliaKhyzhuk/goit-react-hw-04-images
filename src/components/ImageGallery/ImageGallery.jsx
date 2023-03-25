import React, { Component } from 'react';
import css from 'components/styles.module.css';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imagesFound }) => {
  return (
    <ul className={css.ImageGallery}>
      {imagesFound.map(image => {
        return (
          <li className={css.ImageGalleryItem} key={image.id}>
          <ImageGalleryItem
           image={image}
          />
          </li>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  imagesFound: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pageURL: PropTypes.string.isRequired,
      previewURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
