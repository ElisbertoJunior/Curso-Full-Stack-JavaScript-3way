import * as S from "./styles";

type Props = {
  cardImg: string;
  subtitle: number | string;
  text: string;
  textF: string;
};

const Card = ({ cardImg, subtitle, text, textF }: Props) => {
  return (
      <S.Card>
        <S.CardImg src={`/assets/${cardImg}`} />
        <S.Subtitle>
          <img src={"/assets/star.png"} />
          {subtitle}
        </S.Subtitle>
        <S.text>{text}</S.text>
        <S.textFooter>{textF}</S.textFooter>
      </S.Card>
    
  );
};

export default Card;
