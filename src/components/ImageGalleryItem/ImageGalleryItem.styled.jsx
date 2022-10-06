import styled from 'styled-components';

const GalleryItem = styled.li`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 6px -1px #718f77;

  .ImageGalleryItem-image {
    display: block;
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .ImageGalleryItem-image:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export default GalleryItem;
