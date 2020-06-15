import styled from 'styled-components';

export const Input = styled.input`
  border:none;
  padding: 10px;
  border-radius: 4px;
  background-color: #f9f9f9;
  color: #000000;
  font-weight:bold;
  font-size: 16px;
  width: 100%;

  &::placeholder {
    font-weight:400;
    font-style:italic;
  }
`;
