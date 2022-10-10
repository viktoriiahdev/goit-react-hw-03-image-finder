import React, { StrictMode } from 'react';

import { fetchImages } from 'services/fetchImages';

import Section from './Section/Section.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

class App extends React.Component {
  state = {
    images: null,
    modalImage: null,
    loading: false,
    page: 0,
    perPage: 12,
    total: 0,
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page, perPage } = this.state;
    if (prevState.page === page && prevState.query === query) return;

    let currentPage = page;
    if (prevState.query !== query) currentPage = 1;
    this.setState({ loading: true });

    fetchImages(query, currentPage, perPage)
      .then(json => {
        if (currentPage === 1) this.setState({ images: json.hits, page: currentPage });
        else
          this.setState(prev => ({
            images: [...prev.images, ...json.hits],
          }));

        this.setState({
          total: json.total,
        });
      })
      .finally(this.setState({ loading: false }));
  }

  searchImages = query => {
    this.setState({ query });
  };

  loadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  onModalOpen = image => {
    this.setState({ modalImage: image });
  };

  onModalClose = () => {
    this.setState({ modalImage: null });
  };

  onModalToggle = image => {
    this.setState({ modalImage: image });
  };

  render() {
    const { images, loading, modalImage, total, perPage, page } = this.state;
    const loadMore = total > page * perPage;

    return (
      <StrictMode>
        <Section>
          <Searchbar onSubmit={this.searchImages} />
          {images && <ImageGallery images={images} onOpen={this.onModalToggle} />}
          {loadMore && <Button onClick={this.loadMore} disabled={loading} />}
          <Loader visible={loading} />
          {modalImage && <Modal img={modalImage} alt="" onClose={this.onModalToggle} />}
        </Section>
      </StrictMode>
    );
  }
}

export default App;
