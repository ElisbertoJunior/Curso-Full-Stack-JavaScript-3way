import styled from "styled-components";

export const MainContainer = styled.main`
  background-image: url('src/assets/logo-react-back.png');
  background-repeat: no-repeat;
  background-size: 150px;
  background-position: right 85%;
  padding: 27px;
  
  h2 {
    font-size: 39px;
    line-height: 47px;
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 27px;
  }

  ul {
    margin-left: 51px;
    li {

      color: #fff;
      font-size: 16px;
      padding-block: 10px;

      ::marker {
        font-size: 1.6rem;
        color: #61DAFB;
      }
    }

  }

`