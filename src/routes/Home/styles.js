import styled from 'styled-components';

export const Grid = styled.div`
  padding:100px 0px;
  display:grid;
  grid-template-columns: repeat( auto-fill, minmax(350px, 1fr) );
  grid-auto-flow: dense;
  grid-gap: 20px;
  margin:0 auto;
`;
