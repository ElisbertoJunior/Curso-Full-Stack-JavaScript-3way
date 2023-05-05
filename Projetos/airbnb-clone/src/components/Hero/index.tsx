import * as S from './styles'

const Hero = () => {
  return (
   <S.Hero> 
    <S.HeroBanner src={'/assets/photo-grid.png'}/>
    <S.MainTitle>Online Experiences</S.MainTitle>
    <S.Text>Join unique interactive activities led by<br/> one-of-a-kind hosts—all without leaving<br/> home.
    </S.Text>
   </S.Hero>
  )
}

export default Hero