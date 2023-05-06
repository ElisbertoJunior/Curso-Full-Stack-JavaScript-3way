import styled, { createGlobalStyle } from "styled-components";
import {  LinkedinButon } from "../containers/Card/styles";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    list-style-type: none;
  }

  body {
    background-color: #23252C;
    padding: 20px;
    
  }
`;

export const ButtonTheme = styled(LinkedinButon)`
  margin: 60px auto;
  cursor: pointer;
`

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export default GlobalStyle;
