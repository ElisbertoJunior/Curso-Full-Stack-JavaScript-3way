import * as S from "./styles";

type Props = {
  cardImg: string;
  subtitle: number | string;
  text: string;
  textF: string;
  openSpots: number;
  location: string;
};

const Card = ({
  cardImg,
  subtitle,
  text,
  textF,
  openSpots,
  location,
}: Props) => {
  let badge;

  if (openSpots === 0) {
    badge = "SOLD OUT";
  } else if (location === "Online") {
    badge = "ONLINE";
  }

  return (
    <S.Card>
      <S.CardImg src={`/assets/${cardImg}`} />
      <S.Subtitle>
        <img src={"/assets/star.png"} />
        {subtitle}
      </S.Subtitle>
      <S.text>{text}</S.text>
      <S.textFooter>{textF}</S.textFooter>
      {badge && <S.Badge>{badge}</S.Badge>}
    </S.Card>
  );
};

export default Card;
