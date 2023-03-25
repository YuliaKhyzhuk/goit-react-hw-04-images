import React, { Component } from 'react';
import css from './styles.module.css';
import { PER_PAGE, getImages } from 'services/pixabayApi';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    images: [],
    totalHits: 0,
    page: 1,
    query: '',
    error: false,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const getImgCollection = async () => {
        try {
          this.setState({ isLoading: true });

          const searchedCollection = await getImages(
            this.state.query,
            this.state.page
          );
          const images = searchedCollection.hits;
          const totalHits = searchedCollection.totalHits;
          console.log(images);
          if (!totalHits) {
            alert('Nothing found. Please enter another query');
            return;
          }

          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            totalHits,
          }));
        } catch (error) {
          this.setState({ error: true });
          alert('Oops! Error loading!');
        } finally {
          this.setState({ isLoading: false });
        }
      };
      getImgCollection();
    }
  }

  isMorePagesAvailable(page) {
    return page * PER_PAGE < this.state.totalHits;
  }

  handleFormSearchSubmit = query => {
    this.setState({
      images: [],
      totalHits: null,
      page: 1,

      query: query,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { page, images, isLoading } = this.state;

    return (
      <div>
        <div className={css.App}>
        <Searchbar onSearch={this.handleFormSearchSubmit} />

        {isLoading && <Loader />}

        {images.length !== 0 && <ImageGallery imagesFound={images} />}

        </div>

        {this.isMorePagesAvailable(page) && isLoading === false && (
          <Button handleLoadMore={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
