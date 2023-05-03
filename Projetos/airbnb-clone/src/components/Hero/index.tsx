import * as S from './styles'
import banner from '../../assets/photo-grid.png'


const Hero = () => {
  return (
   <S.Hero> 
    <S.HeroBanner src={banner}/>
    <S.MainTitle>Online Experiences</S.MainTitle>
    <S.Text>Join unique interactive activities led by<br/> one-of-a-kind hosts—all without leaving<br/> home.
    </S.Text>
   </S.Hero>
  )
}

export default Hero