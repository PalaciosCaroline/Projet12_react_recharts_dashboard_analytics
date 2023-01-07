import { createGlobalStyle } from 'styled-components';
 
 const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  ul, li{
    margin: 0;
    padding: 0;
    list-style-type: none;
  
  }
  
  a{
    text-decoration: none;
    color:white;
  }


}`


export default GlobalStyle;