import * as S from './styles'
import bannerImg from '../../../assets/banner-fundo.png'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'

const HeaderPerfil = () => (
  <S.HeaderPerfilContainer style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <S.Links>
        <Link to={'/'}>
          <li>Restaurantes</li>
        </Link>
        <li className="logo-li">
          <Link to={'/'}>
            <img src={logo} alt="EFood" />
          </Link>
        </li>
        <li>0 produto(s) no carrinho</li>
      </S.Links>
    </div>
  </S.HeaderPerfilContainer>
)

export default HeaderPerfil
