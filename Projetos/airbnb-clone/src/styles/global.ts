import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

`

export const Container = styled.div`
  max-width: 550px;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
`
export const CardContainer = styled.div`
  width: 120%;
  display: flex; 
  gap: 18px;
  
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 30px;

  
`;


export default GlobalStyles