import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #21222A;

  div {
    display: flex;
    align-items: center;

    gap: 8px;

    img {
      height: 31px;
      display: inline-block;
    }

    h1 {
      font-size: 22px;
      color: #61DAFB;

    }

  }
  padding: 20px;
`;
