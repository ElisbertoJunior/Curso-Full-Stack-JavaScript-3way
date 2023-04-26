import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #21222A;

  div {
    display: flex;
    
    gap: 5px;

    img {
      height: 31px;
      display: inline-block;
    }

    h1 {
      font-size: 22px;
    }

  }
  padding: 20px;
`;
