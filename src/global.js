import {createGlobalStyle} from 'styled-components'

 const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #52575d;
    font-family: Poppins;

  }
`;


export default GlobalStyle;