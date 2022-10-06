import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Gallery from './ImageGallery.styled';

const ImageGallery = ({ images, onOpen }) => {
  const found = images.length > 0 ? true : false;
  return (
    <Gallery className="ImageGallery">
      {found &&
        images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            large={largeImageURL}
            onClick={onOpen}
          />
        ))}
      {!found && <h2 style={{ textAlign: 'center' }}>Images not found!</h2>}
    </Gallery>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    }).isRequired
  ),
  onOpen: PropTypes.func.isRequired,
};
