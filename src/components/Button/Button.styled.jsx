import styled from 'styled-components';

const LoadMoreButton = styled.button`
  padding: 15px 20px;
  border-radius: 20px;
  background-color: #bff7ca;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  margin: 10px auto 20px;
  color: #000;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  text-transform: uppercase;
  font-weight: 500;
  width: 250px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #73f38d;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export default LoadMoreButton;
