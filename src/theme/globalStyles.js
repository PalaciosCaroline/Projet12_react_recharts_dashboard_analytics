import { createGlobalStyle } from 'styled-components';
 
 const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    height:100vh;
    // box-sizing: border-box;
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
  .main_app{
    display: flex;
    min-height: 934px;
    height:auto;
  }
`


export default GlobalStyle;