import React from 'react';

import LoadMoreButton from './Button.styled';

const Button = ({ onClick, disabled }) => (
  <LoadMoreButton type="text" onClick={onClick} disabled={disabled}>
    Load more
  </LoadMoreButton>
);

export default Button;
