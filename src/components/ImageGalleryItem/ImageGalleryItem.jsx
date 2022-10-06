import GalleryItem from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt, large, onClick }) => (
  <GalleryItem className="ImageGalleryItem" onClick={() => onClick(large)}>
    <img src={src} alt={alt} className="ImageGalleryItem-image" />
  </GalleryItem>
);

export default ImageGalleryItem;
