import * as S from './styles'
import bannerImg from '../../../assets/banner-fundo.png'
import logo from '../../../assets/logo.png'

const HeaderHome = () => (
  <S.HeaderContainer style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <img src={logo} alt="EFood" />
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </div>
  </S.HeaderContainer>
)

export default HeaderHome
