import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Slabo+27px');

  * {
    padding: 0;
    margin: 0; 
  }

  body {
    background-color: #d0cece;
  }

  button, textarea {
    background-color: #f2f2f2;
    border: none;
    overflow: auto;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
  }
`;

export default GlobalStyle;
