import styled from 'styled-components';

export const Header = styled.div`
  background: #ffff;
  border-bottom: 1px solid #eaeaea;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  position: fixed;
  width:100%;
  z-index:200;
  margin-bottom:10px;
  .options {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    position:relative;
    div {
      background-color: #ffde59;
      display:grid;
      grid-auto-flow:column;
      grid-gap:5px;
      padding: 2px;
      border-radius:4px;
      align-items:center;
    }
    button {
    background: transparent;
    border: none;
    cursor: pointer;


  }
  
  }
  @media only screen and (max-width:450px) {
  & {
    font-size:14px;
    flex-direction:column;
  }
  }
`;
