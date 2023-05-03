import * as S from './styles'
import logo from '../../assets/airbnb-logo.png' 

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.Img src={logo}/>
      </S.Container>
    </S.Header>
  )
}

export default Header