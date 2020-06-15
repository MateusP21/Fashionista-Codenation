import styled from 'styled-components';

export const CardContainer = styled.div`
   position:relative;
   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
   transition: all 0.3s; 
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

  }
  .product-image { 
    width: 100%
  }

  .product-image img {
    width: 100%
  }
  ${(props) => props.prod.discount_percentage && 
  `.product-image::before {
    content: "-${props.prod.discount_percentage}";
    position:absolute;
    width: 45px;
    height: 25px;
    background: crimson;
    z-index: 200px;
    top:10px;
    right:10px;
    color:white;
    text-align:center;
}`
}
  
  .product-info{
    display:grid;
    grid-template-columns: 1fr 1fr;
    button {
      padding:10px;
      background-color: #282828;
      border:none;
      height:100%;
      width: 100%;
      font-size: 18px;
     
      color: white;
      cursor:pointer;
    }

    div {
      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
      background:#eeeeee;
      color:#000000;
      font-weight: 700;
      padding:10px;

      .oldPrice {
        margin-right: 10px;
        font-size:14px;
        color:#9c9c9c;
        text-decoration:line-through;
      }
    }
  }
`;
