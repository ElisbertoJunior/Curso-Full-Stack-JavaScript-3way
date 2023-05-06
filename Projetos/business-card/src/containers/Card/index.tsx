/* eslint-disable jsx-a11y/alt-text */
import * as S from "./styles";

type Props = {
  model1: boolean;
};

const Card = ({ model1 }: Props) => {
  return (
    <S.CardContainer>
      <img src={"/images/Rectangle 90.png"} alt="Foto de Perfil" />
      <S.CardBody>
        <S.Title>Laura Smith</S.Title>
        <S.Subtitle>Frontend Developer</S.Subtitle>
        <S.SubtitleEmail>laurasmith.website</S.SubtitleEmail>
        <S.ButtonsContainer>
          {model1 ? (
            <>
              <S.Button>
                <img src={"/icons/Mail.png"} alt="Icone Email" />
                Email
              </S.Button>
              <S.LinkedinButon>
                <img src={"/icons/linkedin.png"} alt="Icone Linkedin" />
                LinkedIn
              </S.LinkedinButon>
            </>
          ) : (
            <S.largeButton>
              <img src={"/icons/Mail.png"} alt="Icone Email" />
              Email
            </S.largeButton>
          )}
        </S.ButtonsContainer>
        <S.SecondaryTitle>About</S.SecondaryTitle>
        <S.Text>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </S.Text>
        <S.SecondaryTitle>Interests</S.SecondaryTitle>
        <S.Text>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </S.Text>
      </S.CardBody>
      <S.CardFooter>
        <ul>
          <li>
            <img src={"/icons/Twitter Icon.png"} />
          </li>
          <li>
            <img src={"/icons/Facebook Icon.png"} />
          </li>
          <li>
            <img src={"/icons/Instagram Icon.png"} />
          </li>
          <li>
            <img src={"/icons/GitHub Icon.png"} />
          </li>
        </ul>
      </S.CardFooter>
    </S.CardContainer>
  );
};

export default Card;
