import * as S  from "./styles"


const Header = () => {
  const img = 'src/assets/Group.png'
  return (
    <S.Header>
      <div>
        <img src={img} />
        <h1>ReactFacts</h1>
      </div>
      <p>React Course - Project 1</p>
    </S.Header>

   
  )
}

export default Header