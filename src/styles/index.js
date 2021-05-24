import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
	  /* background-color: #282c34; */
    background-color: #fffafa;
    height: 100%;
    width: 100%;
    min-height: 100vh;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
