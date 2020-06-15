import styled from 'styled-components';

export const CartContainer = styled.div`
  background-color: #282828;
  margin-bottom: 20px;
  width:100%;
  padding:10px;
  display:grid;
  grid-auto-flow:column;
  color:white;
  .image-container {
    width: 100px;
    margin-right:10px;
  }
  .cart-info {
    p {
      color:#989595;
    }
  }
  .cart-content {
    display:grid;
    grid-template-columns: 2fr 1fr;
    align-items:flex-start;
    grid-gap:10px;
    h3 {
      font-size: 14px;
    }
   & > button {
     margin:0;
     padding:4px;
      background-color: #fff;
      display:flex;
      align-items:center;
      border-radius:8px;
      transition: all 0.5s;
      &:hover {
        background-color:#fafafa;
      }
    }
    .cart-controls {
      margin-top:20px;
      display:grid;
      grid-auto-flow:column;
      align-items:center;

      button {
        margin:0;
        padding:0;
      }
    }

    .cart-price {
      .installments {
        color: #989595;
        font-size: 12px;
      }
  

    }
  }
`;
