import React, { StrictMode } from 'react';

import styled from 'styled-components';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  padding-bottom: 24px;
`;

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

    setTimeout(() => {
      fetch(
        `https://pixabay.com/api/?page=${currentPage}&key=30324488-6bb1c38396bab0c48c780a7b6&image_type=photo&orientation=horizontal&per_page=${perPage}&q=${query}`
      )
        .then(res => res.json())
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
    }, 600);
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
