import styled from "styled-components";

export const CardContainer = styled.div`
  height: 780px;
  width: 317px;
  
  border-radius: 8px;

  img {
    height: 317px;
    width: 100%;
  }

`

export const CardBody = styled.div`
  margin-top: -3px;
  height: 399px;
  width: 100%;
  padding: 25px 35px;
  background-color:${(props) => props.theme.backgroundColor};
`

export const CardFooter = styled.div`
  background-color: ${(props) => props.theme.backgroundFooterColor};
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  img {
    height: 25px;
    width: 25px;
  }

`
export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px
  
`

export const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  margin-bottom: 5px;
`;

export const SecondaryTitle = styled.h3`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.secondaryTitleColor};
  margin-bottom: 5px;
`
export const Text = styled.p`
  font-size: 10.24px;
  line-height: 15px;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
`

export const Subtitle = styled.h2`
  font-weight: normal;
  font-size: 12.8px;
  line-height: 15px;
  text-align: center;
  margin-bottom: 5px;
  color: ${(props) => props.theme.subtitleColor};
`;

export const SubtitleEmail = styled.p`
  font-weight: normal;
  font-size: 10.24px;
  line-height: 15px;
  text-align: center;
  color: ${(props) => props.theme.secondaryTitleColor};
`;

export const Button = styled.button`
  img {
    height: 16px;
    width: 16px;
  }

  width: 115px;
  padding-top: 9px;
  padding-bottom: 9px;
  margin-top: 20px;
  margin-bottom: 30px;
  
  background-color: #FFFFFF;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.05);
  
`
export const largeButton = styled(Button)`
  width: 100%;
`

export const LinkedinButon = styled(Button)`
  background-color: #5093E2;
  color: #FFFFFF;
  border: none;
`
