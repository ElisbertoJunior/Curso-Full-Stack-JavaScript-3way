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
export default GlobalStyles