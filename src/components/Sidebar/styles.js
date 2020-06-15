import styled from 'styled-components';
import { Animated } from 'react-animated-css';

export const SideNav = styled(Animated)`
  padding: 10px;
  background:#eeeeee;
  height: 100vh;
  width:400px;
  position:fixed;
  z-index: 200;
  right: ${(props) => (props.isVisible ? '0' : '-400px')};
  top:0;
  display:flex;
  flex-direction: column;
  align-items:center;
  .window-cart {
      max-height: 400px;
      overflow:auto;
      padding: 10px;
    }
  button {
    margin-bottom: 10px;
    align-self: flex-end;
    background: transparent;
    border: none;
    width: max-content;
    height: max-content;
    padding: 10px;
    cursor: pointer;
  }

  .default-message {
    margin-top: 200px;
   display: flex;
   flex-direction:column;

    span {
      font-size: 48px;
      color: #757575;
    }

    h3 {
      font-size: 24px;
      color: #4d4d4d;
    }

  }

  .total {
      background-color: crimson;
      text-align:center;
      width: 100%;
      color: white;  
    }


    @media only screen and (max-width: 400px) {
  & {
    width:100%;
    height:100%;
  }

`;
