import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap');  * {
    margin :0;
    padding:0;
    outline: none;
    box-sizing: border-box; 
  }

  body {
    background-color: #fafafafa;
    font-family: Open Sans , sans-serif;
  }

  img {
    width: 100%
  }

  li {
    list-style:none;
  }

  a:link, a:visited {
    color: #000 !important;
    text-decoration: none;
}​
  
`;

export const Container = styled.div`
 position: relative;
 transition: all 0.3s;
`;
