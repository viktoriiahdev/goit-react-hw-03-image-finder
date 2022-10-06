import React from 'react';
import PropTypes from 'prop-types';

import LoadMoreButton from './Button.styled';

const Button = ({ onClick, disabled }) => (
  <LoadMoreButton type="text" onClick={onClick} disabled={disabled}>
    Load more
  </LoadMoreButton>
);

export default Button;

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
