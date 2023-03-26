import React from 'react';
import { useEffect, useState } from 'react';
import css from './styles.module.css';
import { PER_PAGE, getImages } from 'services/pixabayApi';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export function App() {
  const [images, setImages] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    const getImgCollection = async () => {
      try {
        setIsLoading(true);

        const searchedCollection = await getImages(query, page);
        const images = searchedCollection.hits;
        const totalHits = searchedCollection.totalHits;
        console.log(images);
        if (!totalHits) {
          alert('Nothing found. Please enter another query');
          return;
        }

        setImages(prevState => [...prevState, ...images]);
        setTotalHits(totalHits);
      } catch (error) {
        setError(true);
        alert('Oops! Error loading!');
      } finally {
        setIsLoading(false);
      }
    };
    getImgCollection();
  }, [query, page]);

  const isMorePagesAvailable = page => {
    return page * PER_PAGE < totalHits;
  };

  const handleFormSearchSubmit = query => {
    setImages([]);
    setTotalHits(null);
    setPage(1);
    setQuery(query);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div>
      <div className={css.App}>
        <Searchbar onSearch={handleFormSearchSubmit} />

        {isLoading && <Loader />}

        {images.length !== 0 && <ImageGallery imagesFound={images} />}
      </div>

      {isMorePagesAvailable(page) && isLoading === false && (
        <Button handleLoadMore={handleLoadMore} />
      )}
    </div>
  );
}
