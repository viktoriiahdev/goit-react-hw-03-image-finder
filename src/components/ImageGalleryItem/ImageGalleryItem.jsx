import GalleryItem from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, large, onClick }) => (
  <GalleryItem className="ImageGalleryItem" onClick={() => onClick(large)}>
    <img src={src} alt={alt} className="ImageGalleryItem-image" />
  </GalleryItem>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  large: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
