import React from 'react';
import PropTypes from 'prop-types';

import GalleryModal from './Modal.styled';

class Modal extends React.Component {
  handleOverlayClick = e => {
    if (e.currentTarget === e.target) this.props.onClose(null);
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') this.props.onClose(null);
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { img, alt } = this.props;

    return (
      <GalleryModal className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          <img src={img} alt={alt} />
        </div>
      </GalleryModal>
    );
  }
}

export default Modal;

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
