import styled from 'styled-components';

export const ProductContainer = styled.div`
  padding: 100px 0;
  display:flex;
  justify-content:center;
  align-items:center;
`;
export const Item = styled.div`
  
  display:grid;
  grid-auto-flow:column;
  align-items:center;
  .image-container {
    width: 400px;
  }

  .product-details {
    display:grid;
    grid-auto-rows: max-content;
    grid-gap:10px;
    justify-self:center;
    padding:10px;
    h1 {
      margin-top:40px;
      font-size:18px
    }
    button {
      background-color: #23cba7;
      border:none;
      cursor:pointer;
      padding:10px;
      font-size:16px;
      font-weight:bold;
      color:white;
    }

    ul {
      display:grid;
      grid-auto-flow: column;
      grid-gap: 10px;
    }


  }
  @media only screen and (max-width:450px) {
  & {
    grid-auto-flow:row;
  }
`;
export const ItemList = styled.li`
  
  background-color: #000;
  border-radius:4px;
  width: max-content;
  padding: 10px;
  color: white;
  cursor:pointer;
${(props) => props.size === props.children && 'background-color:crimson; color: #fff'}
${(props) => !props.available && `
  background-color: #fff;
  color: #d5c9c9;
  cursor: default;
  
`}

`;
