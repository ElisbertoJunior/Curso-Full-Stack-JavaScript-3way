import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #282D35;
  }

  .container {
   
    width: 100%;
    margin: 0 auto;

    color: #fff;

  }

`